const userForm = document.querySelector('.ad-form')
const userFormFieldsets = userForm.querySelectorAll('fieldset')
const mapFilter = document.querySelector('.map__filters')
const mapFilterItems = mapFilter.querySelectorAll('.map__filter')
const mapFilterFeatures = mapFilter.querySelector('.map__features')

const toggleUserFormState = () =>{
  userForm.classList.toggle('ad-form--disabled')
  userFormFieldsets.forEach( fieldset => {
    fieldset.toggleAttribute('disabled', '')
  })
}

const toggleMapFilterState = () => {
  mapFilter.classList.toggle('map__filters--disabled')
  mapFilterItems.forEach(item => {
    item.toggleAttribute('disabled', '')
  })
  mapFilterFeatures.toggleAttribute('disabled', '')
}

export { toggleUserFormState, toggleMapFilterState }
