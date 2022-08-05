var elForm = document.querySelector(".hero__form");
var elInput = document.querySelector(".hero__input");
var elItem1 = document.querySelector(".hero__item-1");
var elItem2 = document.querySelector(".hero__item-2");
var elItem3 = document.querySelector(".hero__item-3");
var elItem4 = document.querySelector(".hero__item-4");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var elInputVal = elInput.value;
  var manSpeed = 3.6;
  var bikeSpeed = 20.1;
  var carSpeed = 70;
  var planeSpeed = 800;

  var manSpeedScore = elInputVal / manSpeed;
  var bikeSpeedScore = elInputVal / bikeSpeed;
  var carSpeedScore = elInputVal / carSpeed;
  var planeSpeedScore = elInputVal / planeSpeed;

  var manSpeedHour = Math.floor(manSpeedScore);
  var bikeSpeedHour = Math.floor(bikeSpeedScore);
  var carSpeedHour = Math.floor(carSpeedScore);
  var planeSpeedHour = Math.floor(planeSpeedScore);

  var manSpeedMin = Math.floor((manSpeedScore - manSpeedHour) * 60)
  var bikeSpeedMin = Math.floor((bikeSpeedScore - bikeSpeedHour) * 60)
  var carSpeedMin = Math.floor( (carSpeedScore - carSpeedHour) * 60)
  var planeSpeedMin = Math.floor((planeSpeedScore - planeSpeedHour) * 60)

  // var manSpeedSec = Math.floor((manSpeedScore - manSpeedMin) * 60)
  // var bikeSpeedSec = Math.floor((bikeSpeedScore - bikeSpeedMin) * 60)
  // var carSpeedSec = Math.floor( (carSpeedScore - carSpeedMin) * 60)
  // var planeSpeedSec = Math.floor((planeSpeedScore - planeSpeedMin) * 60)

  var manSpeedSec = Math.floor((manSpeedScore - manSpeedHour) * 3600)
  var bikeSpeedSec = Math.floor((bikeSpeedScore - bikeSpeedHour) * 3600)
  var carSpeedSec = Math.floor( (carSpeedScore - carSpeedHour) * 3600)
  var planeSpeedSec = Math.floor((planeSpeedScore - planeSpeedHour) * 3600)

  elItem1.textContent = `${manSpeedHour}  hour ${manSpeedMin} minute ${manSpeedSec} second (by walking)`;
  elItem2.textContent = `${bikeSpeedHour}  hour ${bikeSpeedMin} minute ${bikeSpeedSec} second (by bike)`;
  elItem3.textContent = `${carSpeedHour}  hour ${carSpeedMin} minute ${carSpeedSec} second (by Car)`;
  elItem4.textContent = `${planeSpeedHour}  hour ${planeSpeedMin} minute ${planeSpeedSec} second (by Plane)`;

  if(elInputVal <= 0 ) {
    elItem1.textContent = "Write number greater than 0!"
  }

  else if (isNaN(elInputVal)) {
    elItem1.textContent = "Write only numbers!"
  }
});
