import {getRandomOffer} from './get-random-offer.js'

const cardTemplate = document.querySelector('#card').content

getRandomOffer()

const generateSimilarOffer = () => {
  let clonedCardTemplate = cardTemplate.cloneNode(true)
  let cardAvatar = clonedCardTemplate.querySelector('.popup__avatar')
  let cardTitle = clonedCardTemplate.querySelector('.popup__title')
  let cardAddress = clonedCardTemplate.querySelector('.popup__text--address')
  let cardPrice = clonedCardTemplate.querySelector('.popup__text--price')
  let cardType = clonedCardTemplate.querySelector('.popup__type')
  let cardCapacity = clonedCardTemplate.querySelector('.popup__text--capacity')
  let cardTime = clonedCardTemplate.querySelector('.popup__text--time')
  let cardDescription = clonedCardTemplate.querySelector('.popup__description')
  let cardFeatures = clonedCardTemplate.querySelector('.popup__features')
  let cardPhotos = clonedCardTemplate.querySelector('.popup__photos')
  let cardPhoto = cardPhotos.querySelector('.popup__photo')

  cardTitle.textContent = getRandomOffer().offer.title

  cardAddress.textContent = getRandomOffer().offer.address

  cardPrice.textContent = `${getRandomOffer().offer.price} ₽/ночь`

  cardType.textContent = getRandomOffer().offer.type

  cardCapacity.textContent = `${getRandomOffer().offer.rooms} комнаты для ${getRandomOffer().offer.guests} гостей`

  cardTime.textContent = `Заезд после ${getRandomOffer().offer.checkin}, выезд до ${getRandomOffer().offer.checkout}`

  cardAvatar.setAttribute('src', getRandomOffer().author.avatar )

  // Features
  cardFeatures.textContent = ''
  getRandomOffer().offer.features.forEach( feature => {
    let newFeature = document.createElement('li')
    newFeature.classList.add('popup__feature', `popup__feature--${feature}`)
    cardFeatures.appendChild(newFeature)
  });

  cardDescription.textContent = getRandomOffer().offer.description

  // Photos
  cardPhotos.textContent = ''
  getRandomOffer().offer.photos.forEach( photo => {
    let newPhoto = cardPhoto.cloneNode(true)
    newPhoto.setAttribute('src', photo)
    cardPhotos.appendChild(newPhoto)
  });

  return clonedCardTemplate
}

export {generateSimilarOffer}
