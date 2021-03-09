const mapContainer = document.querySelector('#map-canvas')

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const getRandomNumberWithFloat = (min, max, floatSigns) => parseFloat((Math.random() * (max - min) + min).toFixed(floatSigns))

const addZeroes = (n, neededLength = 2) => {
  n = String(n);
  while (n.length < neededLength) {
    n = '0' + n;
  }
  return  n
}

const getRandomNumberWithZeroes = (min, max)  => addZeroes(getRandomNumber(min, max))

const getRandomArrayElement = (arr) => arr[getRandomNumber(0, arr.length - 1)]

const createUniqueArray = (arr) =>  Array.from(new Set(arr))

const createRandomLengthArrayUnique = (arr) => createUniqueArray(createRandomLengthArray(arr, arr.length))

const createRandomLengthArray = (arr, maxLength) => {
  let createdArray = [];
  let newArrayLength = getRandomNumber(1, maxLength)

  while(createdArray.length < newArrayLength){
    createdArray.push(getRandomArrayElement(arr))
  }

  return createdArray;
};

const getRandomLocation =  (minX, maxX, minY, maxY, floatSigns = 5) => {
  return {
    x: getRandomNumberWithFloat(minX, maxX, floatSigns),
    y: getRandomNumberWithFloat(minY, maxY, floatSigns),
  }
}

const getRandomLocationToString = (func) => Object.values(func).join(', ')

const showError = (message) => {
  const errorContainer = document.createElement('div');
  errorContainer.style.zIndex = 99999999;
  errorContainer.style.position = 'absolute';
  errorContainer.style.width = '80%';
  errorContainer.style.left = 0;
  errorContainer.style.right = 0;
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

export { getRandomNumber, getRandomNumberWithFloat, addZeroes, getRandomNumberWithZeroes,
  getRandomArrayElement, createUniqueArray, createRandomLengthArrayUnique, createRandomLengthArray,
  getRandomLocation, getRandomLocationToString, showError, isEscEvent }
