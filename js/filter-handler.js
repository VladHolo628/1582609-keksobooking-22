
const mapFilter = document.querySelector('.map__filters')
const mapFilterItems = mapFilter.querySelectorAll('.map__filter')
const mapFilterFeatures = mapFilter.querySelector('.map__features')
const filterTypeOfHouse = document.querySelector('#housing-type');
const filterPrice = document.querySelector('#housing-price');
const filterRooms = document.querySelector('#housing-rooms');
const filterGuests = document.querySelector('#housing-guests');
const filterFeatures = document.querySelectorAll('.map__checkbox');




const toggleMapFilterState = () => {
  mapFilter.classList.toggle('map__filters--disabled')
  mapFilterItems.forEach(item => {
    item.toggleAttribute('disabled', '')
  })
  mapFilterFeatures.toggleAttribute('disabled', '')
}

const resetMapFilter = () => {
  mapFilter.reset()
}

const filterInitialization = (cb) => {
  filterTypeOfHouse.addEventListener('change', () => cb());
  filterPrice.addEventListener('change', () => cb());
  filterRooms.addEventListener('change', () => cb());
  filterGuests.addEventListener('change', () => cb());
  filterFeatures.forEach((feature) => {
    feature.addEventListener('change', () => cb());
  });
  mapFilter.addEventListener('reset', () => cb());
}

export { toggleMapFilterState, resetMapFilter, filterInitialization }
