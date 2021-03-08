import {resetMapFilter} from './filter-handler.js'
import { resetMap } from './map.js'
import { showErrorModal, showSuccesModal } from './user-modal.js'

const MIN_TITLE_LENGTH = 30
const MAX_TITLE_LENGTH = 100
const MAX_PRICE = 1000000

const roomsAndPrices = {
  'bungalow': 0,
  'flat': 1000,
  'house': 5000,
  'palace': 10000,
};

const userForm = document.querySelector('.ad-form')
const addressInput = userForm.querySelector('input[name="address"]')
const apartamentInput = userForm.querySelector('select[name="type"]')
const titleInput = userForm.querySelector('input[name="title"]')
const priceInput = userForm.querySelector('input[name="price"]')
const checkInInput = userForm.querySelector('select[name="timein"]')
const checkOutInput = userForm.querySelector('select[name="timeout"]')
const roomNumberInput = userForm.querySelector('select[name="rooms"]')
const guestNumberInput = userForm.querySelector('select[name="capacity"]')
addressInput.setAttribute('readonly', '')

priceInput.placeholder = roomsAndPrices[apartamentInput.value]
priceInput.min = roomsAndPrices[apartamentInput.value]
priceInput.max = MAX_PRICE

apartamentInput.addEventListener('change', function () {
  const minPrice = roomsAndPrices[apartamentInput.value];
  priceInput.min = minPrice;
  priceInput.placeholder = minPrice;
});

checkInInput.addEventListener('change', function () {
  checkOutInput.selectedIndex = checkInInput.selectedIndex;
});
checkOutInput.addEventListener('change', function () {
  checkInInput.selectedIndex = checkOutInput.selectedIndex;
});


if(guestNumberInput.value > roomNumberInput.value){
  guestNumberInput.setCustomValidity('Количество гостей не может превышать' + roomNumberInput.value)
}

guestNumberInput.addEventListener('change',(evt) => {
  const roomCount = roomNumberInput.value
  const guestCount = evt.target.value
  if(roomCount < guestCount && guestCount > 0 && roomCount <= 3){
    guestNumberInput.setCustomValidity('Количество гостей не может превышать ' + roomCount)
  }else if(roomCount == 100 && guestCount > 0){
    guestNumberInput.setCustomValidity('Столько комнат точно не для гостей!')
  }else if(roomCount < 100 && guestCount == 0){
    guestNumberInput.setCustomValidity('Комнаты не могут быть без гостей!')
  }
  else{
    guestNumberInput.setCustomValidity('')
  }
  guestNumberInput.reportValidity()
})

roomNumberInput.addEventListener('change',(evt) => {
  const roomCount = evt.target.value
  const guestCount = guestNumberInput.value
  if(roomCount < guestCount && guestCount > 0 && roomCount <= 3){
    guestNumberInput.setCustomValidity('Количество гостей не может превышать ' + roomCount)
  }else if(roomCount == 100 && guestCount > 0){
    guestNumberInput.setCustomValidity('Столько комнат точно не для гостей!')
  }else if(roomCount < 100 && guestCount == 0){
    guestNumberInput.setCustomValidity('Комнаты не могут быть без гостей!')
  }
  else{
    guestNumberInput.setCustomValidity('')
  }
  guestNumberInput.reportValidity()
})

titleInput.addEventListener('input', (evt) => {
  const valueLength = evt.target.value.length
  if(valueLength < MIN_TITLE_LENGTH){
    titleInput.setCustomValidity('Ещё ' + (MIN_TITLE_LENGTH - valueLength) + ' симв.')
  }else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) +' симв.');
  } else {
    titleInput.setCustomValidity('');
  }
  titleInput.reportValidity()
})

const clearUserForm = () => {
  resetMapFilter()
  userForm.reset()
  resetMap()
}

const setUserFormSubmit = (onSuccess) => {
  userForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch(
      'https://22.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if(response.ok){
          showSuccesModal()
          onSuccess()
        }else{
          showErrorModal()
        }
      })
      .catch(() => showErrorModal())
  });
}

userForm.addEventListener('reset' , () => {
  resetMap()
  resetMapFilter()
})
export { setUserFormSubmit, clearUserForm }
