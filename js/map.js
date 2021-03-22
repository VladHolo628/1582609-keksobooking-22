/* global L:readonly */
import { toggleUserFormState } from './toggle-state.js'
import { toggleMapFilterState } from './toggle-state.js'
import { generateSimilarOffer } from './generate-similar-offer.js'
import { sortAdverts } from './util.js'

const MAX_ADVERTS = 10;

const defaultLocation = {
  x: 35.6895000,
  y: 139.6917100,

}
const zoom = 12
const addressFloatLength = 5

const mapContainer = document.querySelector('#map-canvas')
const addressInput = document.querySelector('#address')

const onMapLoad = () => {
  toggleMapFilterState(),
    toggleUserFormState()
}

const map = L.map(mapContainer)
const markersLayer = L.layerGroup()

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
  iconAnchor: [26, 52],
})

let tileLayer = L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
)

tileLayer.addTo(map)

const setMarkers = (offers) => {
  const sortedOffers = offers
    .slice()
    .sort(sortAdverts)
    .filter((value) => value.filterFlag !== false) // избавление от неподходящих объявлений
    .slice(0, MAX_ADVERTS);
  markersLayer.clearLayers()
  sortedOffers.forEach((offerItem) => {
    const pinMarker = L.marker(
      {
        lat: offerItem.location.lat,
        lng: offerItem.location.lng,
      },

      {
        icon: pinIcon,
        keepInView: true,
      },
    )

    pinMarker.on('click', () => {
      pinMarker.bindPopup(generateSimilarOffer(offerItem))
    })
    pinMarker.addTo(markersLayer)
  })
  markersLayer.addTo(map)
}

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
  addressInput.value = `${(evt.target.getLatLng().lat).toFixed(addressFloatLength)}, ${(evt.target.getLatLng().lng).toFixed(addressFloatLength)}`;
});

const resetMap = () => {
  mainPinMarker.setLatLng([defaultLocation.x, defaultLocation.y])
  addressInput.setAttribute('value', `${defaultLocation.x}, ${defaultLocation.y}`)
  map.setView([defaultLocation.x, defaultLocation.y], zoom)
}

export { map, setMarkers, resetMap }

