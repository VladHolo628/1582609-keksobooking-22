const bungalowMinPrice = '0'
const flatMinPrice = '1000'
const palaceMinPrice = '10000'
const houseMinPrice = '5000'

const offerType = document.querySelector('#type')
const priceInput = document.querySelector('#price')
const checkinTime = document.querySelector('#timein')
const checkoutTime = document.querySelector('#timeout')

priceInput.placeholder =  flatMinPrice
priceInput.min = flatMinPrice

offerType.addEventListener('change', (evt) => {
  if (evt.target.value === 'palace'){
    priceInput.placeholder = palaceMinPrice
    priceInput.min = palaceMinPrice
  }

  if (evt.target.value === 'flat'){
    priceInput.placeholder = flatMinPrice
    priceInput.min = flatMinPrice
  }

  if (evt.target.value === 'bungalow'){
    priceInput.placeholder = bungalowMinPrice
    priceInput.min = bungalowMinPrice
  }

  if (evt.target.value === 'house'){
    priceInput.placeholder = houseMinPrice
    priceInput.min = houseMinPrice
  }
});

checkinTime.addEventListener('change', (evt) => {
  checkoutTime.value = evt.target.value
});

checkoutTime.addEventListener('change', (evt) => {
  checkinTime.value = evt.target.value
});
