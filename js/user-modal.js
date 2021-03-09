import { isEscEvent } from './util.js'
const successModalTemplate = document.querySelector('#success').content
const errorModalTemplate = document.querySelector('#error').content
const pageMain = document.querySelector('main')
const errorModal = errorModalTemplate.cloneNode(true)
const successModal = successModalTemplate.cloneNode(true)
const errorModalCloseButton = errorModal.querySelector('.error__button')

const showSuccesModal = () => {
  pageMain.appendChild(successModal)

  const shownModal = document.querySelector('.success')

  if(shownModal.style.display === 'none'){
    shownModal.style.display = ''
  }

  window.addEventListener('click', () => {
    shownModal.style.display ='none'
  },{once:true})

  window.addEventListener('keydown', (evt) => {
    if(isEscEvent(evt))
      shownModal.style.display ='none'
  },{once:true})
}

const showErrorModal = () => {
  pageMain.appendChild(errorModal)

  const shownModal = document.querySelector('.error')

  if(shownModal.style.display === 'none'){
    shownModal.style.display = ''
  }

  errorModalCloseButton.addEventListener('click', () => {
    shownModal.style.display ='none'
  },{once:true})

  window.addEventListener('click', () => {
    shownModal.style.display ='none'
  },{once:true})

  window.addEventListener('keydown', (evt) => {
    if(isEscEvent(evt))
      shownModal.style.display ='none'
  },{once:true})
}

export { showSuccesModal, showErrorModal }
