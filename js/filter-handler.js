const mapFilter = document.querySelector('.map__filters')
const mapFilterItems = mapFilter.querySelectorAll('.map__filter')
const mapFilterFeatures = mapFilter.querySelector('.map__features')

const toggleMapFilterState = () => {
  mapFilter.classList.toggle('map__filters--disabled')
  mapFilterItems.forEach(item => {
    item.toggleAttribute('disabled', '')
  })
  mapFilterFeatures.toggleAttribute('disabled', '')
}


export { toggleMapFilterState }
