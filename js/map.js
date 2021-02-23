/* global L:readonly */

import{generateSimilarOffer} from './generate-similar-offer.js'
import {offer} from './get-random-offer.js'
import './filter-handler.js'
import './form-handler.js'
import { toggleUserFormState } from './form-handler.js'
import { toggleMapFilterState } from './filter-handler.js'

const defaultLocation = {
  x: 35.6895000,
  y:139.6917100,

}
const zoom = 12
const addressFloatLength = 5

const mapContainer = document.querySelector('#map-canvas')
const addressInput = document.querySelector('#address')

addressInput.setAttribute('readonly', '')

const onMapLoad = () => {
  toggleMapFilterState(),
  toggleUserFormState()
}

let map = L.map(mapContainer)

map.on('load', onMapLoad)

map.setView([defaultLocation.x, defaultLocation.y], zoom)

const pinIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
})

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26,52],
})

let tileLayer = L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
)

tileLayer.addTo(map)

offer.forEach((offerItem) => {
  const pinMarker = L.marker(
    {
      lat: offerItem.location.x,
      lng: offerItem.location.y,
    },

    {
      icon: pinIcon,
      keepInView: true,
    },
  )

  pinMarker
    .addTo(map)
  pinMarker.on('click', () => {
    pinMarker.bindPopup(generateSimilarOffer())
  })
})

const mainPinMarker = L.marker(
  {
    lat: defaultLocation.x,
    lng: defaultLocation.y,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
)
mainPinMarker.addTo(map)

addressInput.value = `${mainPinMarker.getLatLng().lat}, ${mainPinMarker.getLatLng().lng}`

mainPinMarker.on('move', (evt) => {
  addressInput.value =`${(evt.target.getLatLng().lat).toFixed(addressFloatLength)}, ${(evt.target.getLatLng().lng).toFixed(addressFloatLength)}`;
});

export { map }

