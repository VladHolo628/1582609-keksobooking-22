import {
  getRandomNumber,
  getRandomNumberWithZeroes,
  getRandomArrayElement,
  createRandomLengthArrayUnique,
  createRandomLengthArray,
  getRandomLocation,
  getRandomLocationToString } from './util.js'

const OFFERS_COUNT = 10

const TITLES = [
  'Милая, уютная квартирка в Токио',
  'Отличное предложение по отличной цене',
  'Вы никогда не встречали такую квартиру',
  'Центр Токио только для Вас',
  'Жильё в мегаполисе',
];

const TYPES_OF_HOUSE =
[
  'palace',
  'flat',
  'house',
  'bungalow',
];

const CHECK_TIME =
[
  '12:00',
  '13:00',
  '14:00',
]

const  FEATURES =
[
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
]

const DESCRIPTIONS =
[
  'Милая квартирка в Токио, о которой вы мечтали всю жизнь, уже ждёт вас!',
  'За небольшую цену вы получаете максимум удобств и шикарный вид из окна',
  'Вы никогда не встречали такую квартиру, позвоните и узайте подробнее!',
]

const PHOTOS =
[
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
]


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

export {offer}
