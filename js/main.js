import './filter-handler.js'
import './form-handler.js'
import { toggleUserFormState, toggleMapFilterState } from './toggle-state.js'
import './map.js'
import { getMapData } from './api.js'


window.onload = () => {
  toggleMapFilterState()
  toggleUserFormState()
}

getMapData()
