const roomsAndPrices = {
  'bungalow': 0,
  'flat': 1000,
  'house': 5000,
  'palace': 10000,
};

const userForm = document.querySelector('.ad-form')
const apartamentInput = userForm.querySelector('select[name="type"]')
const priceInput = userForm.querySelector('input[name="price"]')
const checkInInput = userForm.querySelector('select[name="timein"]')
const checkOutInput = userForm.querySelector('select[name="timeout"]')
const userFormFieldsets = userForm.querySelectorAll('fieldset')

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

const toggleUserFormState = () =>{
  userForm.classList.toggle('ad-form--disabled')
  userFormFieldsets.forEach( fieldset => {
    fieldset.toggleAttribute('disabled', '')
  })
}

export {toggleUserFormState}
