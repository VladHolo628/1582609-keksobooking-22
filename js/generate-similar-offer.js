const cardTemplate = document.querySelector('#card').content

const generateSimilarOffer = (offerItem) => {
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
  if (offerItem.offer.title === null) {
    cardTitle.style.display = 'none'
  }

  cardTitle.textContent = offerItem.offer.title

  // Address
  if (offerItem.offer.address === null) {
    cardAddress.style.display = 'none'
  }

  cardAddress.textContent = offerItem.offer.address

  // Price
  if (offerItem.offer.price === null) {
    cardPrice.style.display = 'none'
  }

  cardPrice.textContent = `${offerItem.offer.price} ₽/ночь`

  // Type
  if (offerItem.offer.type === null) {
    cardType.style.display = 'none'
  }
  offerItem.offer.type === 'bungalow'?cardType.textContent = 'Бунгало':
    offerItem.offer.type === 'flat'?cardType.textContent = 'Квартира':
      offerItem.offer.type === 'palace'?cardType.textContent = 'Дворец':
        offerItem.offer.type === 'house'?cardType.textContent = 'Дом':
          cardType.textContent = offerItem.offer.type;


  // Capacity
  if (offerItem.offer.rooms || offerItem.offer.guests === null) {
    cardCapacity.style.display = 'none'
  }

  cardCapacity.textContent = `${offerItem.offer.rooms} комнаты для ${offerItem.offer.guests} гостей`

  // Time
  if (offerItem.offer.checkin || offerItem.offer.checkout === null) {
    cardTime.style.display = 'none'
  }

  cardTime.textContent = `Заезд после ${offerItem.offer.checkin}, выезд до ${offerItem.offer.checkout}`

  // Avatar
  if (offerItem.author.avatar === '') {
    cardAvatar.style.display = 'none'
  }
  cardAvatar.setAttribute('src', offerItem.author.avatar )


  // Features
  cardFeatures.textContent = ''
  if(offerItem.offer.features === null){
    cardFeatures.style.display = 'none'
  }
  offerItem.offer.features.forEach( feature => {
    let newFeature = document.createElement('li')
    newFeature.classList.add('popup__feature', `popup__feature--${feature}`)
    cardFeatures.appendChild(newFeature)
  });

  //Description
  if(offerItem.offer.description === null){
    cardDescription.style.display = 'none'
  }

  cardDescription.textContent = offerItem.offer.description

  // Photos
  cardPhotos.textContent = ''

  if (offerItem.offer.photos === null) {
    cardPhotos.style.display = 'none'
  }
  offerItem.offer.photos.forEach( photo  => {
    let newPhoto = cardPhoto.cloneNode(true)
    newPhoto.setAttribute('src', photo)
    cardPhotos.appendChild(newPhoto)
  });

  return clonedCardTemplate
}

export {generateSimilarOffer}
