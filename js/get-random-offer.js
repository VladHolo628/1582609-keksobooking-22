import {
  getRandomNumber,
  getRandomNumberWithZeroes,
  getRandomArrayElement,
  createRandomLengthArrayUnique,
  createRandomLengthArray,
  getRandomLocation,
  getRandomLocationToString } from './util.js'

import {
  TITLES,
  TYPES_OF_HOUSE,
  CHECK_TIME,
  FEATURES,
  DESCRIPTIONS,
  PHOTOS
} from './mock.js'

const OFFERS_COUNT = 10

let getRandomOffer = () => {
  return   {
    author: {
      avatar: 'img/avatars/user' + getRandomNumberWithZeroes(1, 8) + '.png' ,
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: getRandomLocationToString(getRandomLocation(35.65000, 35.70000, 139.70000, 139.80000)),
      price: getRandomNumber(1, 40000),
      type: getRandomArrayElement(TYPES_OF_HOUSE),
      rooms: getRandomNumber(1, 10),
      guests: getRandomNumber(1, 10),
      checkin: getRandomArrayElement(CHECK_TIME),
      checkout: getRandomArrayElement(CHECK_TIME),
      features: createRandomLengthArrayUnique(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: createRandomLengthArray(PHOTOS, 10),
    },
    location: getRandomLocation(35.65000, 35.70000, 139.70000, 139.80000),
  }
}

let offer = new Array(OFFERS_COUNT).fill(null).map(() => getRandomOffer())

export {offer, getRandomOffer}



