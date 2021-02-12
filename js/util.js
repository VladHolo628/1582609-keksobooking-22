const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const getRandomNumberWithFloat = (min, max, floatSigns) => parseFloat((Math.random() * (max - min) + min).toFixed(floatSigns))

const addZeroes = (n, neededLength = 2) => {
  n = String(n);
  while (n.length < neededLength) {
    n = '0' + n;
  }
  return  n
}

const getRandomNumberWithZeroes = (min, max)  => addZeroes(getRandomNumber(min, max))

const getRandomArrayElement = (arr) => arr[getRandomNumber(0, arr.length - 1)]

const createUniqueArray = (arr) =>  Array.from(new Set(arr))

const createRandomLengthArrayUnique = (arr) => createUniqueArray(createRandomLengthArray(arr, arr.length))

const createRandomLengthArray = (arr, maxLength) => {
  let createdArray = [];
  let newArrayLength = getRandomNumber(1, maxLength)

  while(createdArray.length < newArrayLength){
    createdArray.push(getRandomArrayElement(arr))
  }

  return createdArray;
};

const getRandomLocation =  (minX, maxX, minY, maxY, floatSigns = 5) => {
  return {
    x: getRandomNumberWithFloat(minX, maxX, floatSigns),
    y: getRandomNumberWithFloat(minY, maxY, floatSigns),
  }
}

const getRandomLocationToString = (func) => Object.values(func).join(', ')

export { getRandomNumber, getRandomNumberWithFloat, addZeroes, getRandomNumberWithZeroes,
  getRandomArrayElement, createUniqueArray, createRandomLengthArrayUnique, createRandomLengthArray,
  getRandomLocation, getRandomLocationToString }
