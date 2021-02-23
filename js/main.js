import './filter-handler.js'
import './form-handler.js'
import { toggleMapFilterState } from './filter-handler.js'
import { toggleUserFormState } from './form-handler.js'
import './map.js'

window.onload = () => {
  toggleMapFilterState()
  toggleUserFormState()
}





