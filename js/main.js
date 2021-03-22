/* global _:readonly */
import './filter-handler.js'
import './form-handler.js'
import { toggleUserFormState, toggleMapFilterState } from './toggle-state.js'
import './map.js'
import { getMapData } from './api.js'
import { setMarkers } from './map.js'
import { filterInitialization } from './filter-handler.js'

const RERENDERER_DELAY = 500;

window.onload = () => {
  toggleMapFilterState()
  toggleUserFormState()
}

getMapData((offers) => {
  setMarkers(offers)
  filterInitialization(_.debounce(() => setMarkers(offers), RERENDERER_DELAY))
})

