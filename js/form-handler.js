import {resetMapFilter} from './filter-handler.js'
import { resetMap } from './map.js'
import { showErrorModal, showSuccesModal } from './user-modal.js'

const roomsAndPrices = {
  'bungalow': 0,
  'flat': 1000,
  'house': 5000,
  'palace': 10000,
};

const userForm = document.querySelector('.ad-form')
const addressInput = userForm.querySelector('input[name="address"]')
const apartamentInput = userForm.querySelector('select[name="type"]')
const priceInput = userForm.querySelector('input[name="price"]')
const checkInInput = userForm.querySelector('select[name="timein"]')
const checkOutInput = userForm.querySelector('select[name="timeout"]')
addressInput.setAttribute('readonly', '')

priceInput.placeholder = roomsAndPrices[apartamentInput.value]
priceInput.min = roomsAndPrices[apartamentInput.value]

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
