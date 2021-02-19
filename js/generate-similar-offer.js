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

  // Title
  if (getRandomOffer().offer.title === null) {
    cardTitle.style.display = 'none'
  }

  cardTitle.textContent = getRandomOffer().offer.title

  // Address
  if (getRandomOffer().offer.address === null) {
    cardAddress.style.display = 'none'
  }

  cardAddress.textContent = getRandomOffer().offer.address

  // Price
  if (getRandomOffer().offer.price === null) {
    cardPrice.style.display = 'none'
  }

  cardPrice.textContent = `${getRandomOffer().offer.price} ₽/ночь`

  // Type
  if (getRandomOffer().offer.type === null) {
    cardType.style.display = 'none'
  }

  cardType.textContent = getRandomOffer().offer.type

  // Capacity
  if (getRandomOffer().offer.rooms || getRandomOffer().offer.guests === null) {
    cardCapacity.style.display = 'none'
  }

  cardCapacity.textContent = `${getRandomOffer().offer.rooms} комнаты для ${getRandomOffer().offer.guests} гостей`

  // Time
  if (getRandomOffer().offer.checkin || getRandomOffer().offer.checkout === null) {
    cardTime.style.display = 'none'
  }

  cardTime.textContent = `Заезд после ${getRandomOffer().offer.checkin}, выезд до ${getRandomOffer().offer.checkout}`

  // Avatar
  if (getRandomOffer().author.avatar === null) {
    cardAvatar.style.display = 'none'
  }
  cardAvatar.setAttribute('src', getRandomOffer().author.avatar )


  // Features
  cardFeatures.textContent = ''
  if(getRandomOffer().offer.features === null){
    cardFeatures.style.display = 'none'
  }
  getRandomOffer().offer.features.forEach( feature => {
    let newFeature = document.createElement('li')
    newFeature.classList.add('popup__feature', `popup__feature--${feature}`)
    cardFeatures.appendChild(newFeature)
  });

  //Description
  if(getRandomOffer().offer.description === null){
    cardDescription.style.display = 'none'
  }

  cardDescription.textContent = getRandomOffer().offer.description

  // Photos
  cardPhotos.textContent = ''

  if (getRandomOffer().offer.photos === null) {
    cardPhotos.style.display = 'none'
  }
  getRandomOffer().offer.photos.forEach( photo  => {
    let newPhoto = cardPhoto.cloneNode(true)
    newPhoto.setAttribute('src', photo)
    cardPhotos.appendChild(newPhoto)
  });

  return clonedCardTemplate
}

export {generateSimilarOffer}
