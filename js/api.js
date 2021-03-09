import{ setMarkers } from './map.js'
import { showError } from './util.js'
import { showSuccesModal, showErrorModal } from './user-modal.js'

const getMapData = () => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((offers) => {
      setMarkers(offers)
    })
    .catch(() => {
      showError('Не удалось получить данные о похожих объявлениях')
    })
}

const sendFormData = (formData, onSuccess) => fetch(
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


export { getMapData, sendFormData}
