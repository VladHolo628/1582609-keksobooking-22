import {offer} from './get-random-offer.js'
import {generateSimilarOffer} from './generate-similar-offer.js'
const mapCanvas = document.querySelector('#map-canvas')
mapCanvas.appendChild(generateSimilarOffer())
alert(offer)
