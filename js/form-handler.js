const offerType = document.querySelector('#type')
const priceInput = document.querySelector('#price')
const checkinTime = document.querySelector('#timein')
const checkoutTime = document.querySelector('#timeout')

const bungalowMinPrice = '0'
const flatMinPrice = '1000'
const palaceMinPrice = '10000'
const houseMinPrice = '5000'

priceInput.placeholder =  flatMinPrice

offerType.addEventListener('change', (event) => {
  if (event.target.value === 'palace'){
    priceInput.placeholder = palaceMinPrice
    priceInput.min = palaceMinPrice
  }

  if (event.target.value === 'flat'){
    priceInput.placeholder = flatMinPrice
    priceInput.min = flatMinPrice
  }

  if (event.target.value === 'bungalow'){
    priceInput.placeholder = bungalowMinPrice
    priceInput.min = bungalowMinPrice
  }

  if (event.target.value === 'house'){
    priceInput.placeholder = houseMinPrice
    priceInput.min = houseMinPrice
  }
});

checkinTime.addEventListener('change', (event) => {
  checkoutTime.value = event.target.value
});

checkoutTime.addEventListener('change', (event) => {
  checkinTime.value = event.target.value
});
