import './filter-handler.js'
import './form-handler.js'
import { setUserFormSubmit, clearUserForm } from './form-handler.js'
import { toggleUserFormState, toggleMapFilterState } from './toggle-state.js'
import './map.js'
import { setMarkers } from './map.js';
import { showError } from './util.js'

window.onload = () => {
  toggleMapFilterState()
  toggleUserFormState()
}

fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((offers) => {
    setMarkers(offers)
  })
  .catch(() => {
    showError('Не удалось получить данные о похожих объявлениях')
  })

setUserFormSubmit(clearUserForm)
