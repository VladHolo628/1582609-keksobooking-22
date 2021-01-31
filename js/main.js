const getRandomNumber = function (min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomNumberWithFloat = function(min, max, floatSigns) {
  return (Math.random() * (max - min + 1) + min).toFixed(floatSigns);
}
alert(getRandomNumber(0, 10.05));
alert(getRandomNumberWithFloat(0, 10, 3));

