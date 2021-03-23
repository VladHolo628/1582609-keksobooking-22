const DEFAULT_FILTER = 'any'

const Price = {
  LOW_LIMIT: 10000,
  MIDDLE_LIMIT: 50000,
}

const mapContainer = document.querySelector('#map-canvas')

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const getRandomNumberWithFloat = (min, max, floatSigns) => parseFloat((Math.random() * (max - min) + min).toFixed(floatSigns))

const addZeroes = (n, neededLength = 2) => {
  n = String(n);
  while (n.length < neededLength) {
    n = '0' + n;
  }
  return n
}

const getRandomArrayElement = (arr) => arr[getRandomNumber(0, arr.length - 1)]

const createUniqueArray = (arr) => Array.from(new Set(arr))

const createRandomLengthArray = (arr, maxLength) => {
  let createdArray = [];
  let newArrayLength = getRandomNumber(1, maxLength)

  while (createdArray.length < newArrayLength) {
    createdArray.push(getRandomArrayElement(arr))
  }

  return createdArray;
};

const showError = (message) => {
  const errorContainer = document.createElement('div');
  errorContainer.style.zIndex = '99999999';
  errorContainer.style.position = 'absolute';
  errorContainer.style.width = '80%';
  errorContainer.style.left = '0';
  errorContainer.style.right = '0';
  errorContainer.style.margin = '0 auto'
  errorContainer.style.padding = '6px 3px';
  errorContainer.style.fontSize = '20px';
  errorContainer.style.textAlign = 'center';
  errorContainer.style.backgroundColor = 'white';
  errorContainer.style.boxShadow = '0px 10px 13px -7px #000000'

  errorContainer.textContent = message;

  mapContainer.append(errorContainer);

}

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

const getTypeOfPrice = (price) => {
  if (price <= Price.LOW_LIMIT) {
    return 'low';
  }
  else if (price >= Price.LOW_LIMIT && price <= Price.MIDDLE_LIMIT) {
    return 'middle';
  }
  else if (price >= Price.MIDDLE_LIMIT) {
    return 'high';
  }
}

const getAdvertRank = (advert) => {
  let filterTypeOfHouse = document.querySelector('#housing-type').value;
  const filterPrice = document.querySelector('#housing-price').value;
  const filterRooms = document.querySelector('#housing-rooms').value;
  const filterGuests = document.querySelector('#housing-guests').value;
  const filterFeatures = document.querySelectorAll('input[type=checkbox]:checked');
  let rank = 0;
  if (advert.offer.type === filterTypeOfHouse || filterTypeOfHouse === DEFAULT_FILTER) {
    rank += 3;
  }
  else {
    return 0;
  }
  if (getTypeOfPrice(+advert.offer.price) === filterPrice || filterPrice === DEFAULT_FILTER) {
    rank += 2;
  }
  else {
    return 0;
  }
  if (advert.offer.rooms === +filterRooms || filterRooms === DEFAULT_FILTER) {
    rank += 1;
  }
  else {
    return 0;
  }
  if (advert.offer.guests === +filterGuests || filterGuests === DEFAULT_FILTER) {
    rank += 1;
  }
  else {
    return 0;
  }
  for (let filter of filterFeatures) {
    let successFind = false;
    for (let advertValue of advert.offer.features) {
      if (advertValue === filter.defaultValue) {
        successFind = true;
        rank += 0.25;
        break;
      }
    }
    if (successFind === false) {
      return 0;
    }
  }
  return rank;
}

const sortAdverts = (advertA, advertB) => {
  const rankA = getAdvertRank(advertA);
  const rankB = getAdvertRank(advertB);
  advertA.filterFlag = true;
  advertB.filterFlag = true;
  if (rankA === 0) {
    advertA.filterFlag = false;
  }
  if (rankB === 0) {
    advertB.filterFlag = false;
  }
  return rankB - rankA;
}

export {
  getRandomNumber, getRandomNumberWithFloat, addZeroes,
  getRandomArrayElement, createUniqueArray, createRandomLengthArray,
  showError, isEscEvent, sortAdverts
}
