var man, sliderAge, sliderHeight, sliderWeight;
var sedBtn, lightBtn, modBtn, actBtn, extActBnt;
var loseBtn, gainBtn, calcBtn;

//Axonometria
loseBtn = document.getElementById("loseBtn");
gainBtn = document.getElementById("gainBtn");

window.onload = function init() {
  //Sliders
  man = true;
  sliderAge = document.getElementById("slideAge");
  sliderHeight = document.getElementById("slideHeight");
  sliderWeight = document.getElementById("slideWeight");

  //Buttons
  manBtn = document.getElementById("manBtn");
  womanBtn = document.getElementById("womanBtn");

  sedBtn = document.getElementById("sedBtn");
  lightBtn = document.getElementById("lightBtn");
  modBtn = document.getElementById("modBtn");
  actBtn = document.getElementById("actBtn");
  extActBnt = document.getElementById("extActBtn");

  loseBtn = document.getElementById("loseBtn");
  gainBtn = document.getElementById("gainBtn");

  calcBtn = document.getElementById("calcBtn");
  calcBtn.onclick = () => this.calc();
};

function updateAgeInput(val) {
  document.getElementById('age_value').innerHTML = val;
}

function updateHeightInput(val) {
  document.getElementById('height_value').innerHTML = val;
}

function updateWeightInput(val) {
  document.getElementById('weight_value').innerHTML = val;
}

function showExplanation() {
  document.getElementById("explanation").style = "display: inline-block; margin: 2% 15% 2% 15%; border: 10px solid black; padding: 1% 2% 1% 2%;";
  document.getElementById("qMark").onclick = () => hideExplanation();
}

function hideExplanation() {
  document.getElementById("explanation").style = "display: none;";
  document.getElementById("qMark").onclick = () => showExplanation();
}

function calc() {
  var kcal = 0;
  var carbo = 0;
  var protein = 0;
  var fat = 0;
  var age = sliderAge.value;
  var height = sliderHeight.value;
  var weight = sliderWeight.value;
  if (manBtn.checked)
    kcal = 66.47 + (13.75 * weight) + (5.0 * height) - (6.75 * age);
  if (womanBtn.checked)
    kcal = 665.09 + (9.56 * weight) + (1.84 * height) - (4.67 * age);
  if (sedBtn.checked)
    kcal *= 1.2;
  if (lightBtn.checked)
    kcal *= 1.375;
  if (modBtn.checked)
    kcal *= 1.55;
  if (actBtn.checked)
    kcal *= 1.725;
  if (extActBtn.checked)
    kcal *= 1.9;
  if (loseBtn.checked) {
    kcal *= 0.85;
    carbo = Math.round((kcal * 0.3) / 7.7161791764707);
    protein = Math.round((kcal * 0.45) / 7.7161791764707);
    fat = Math.round((kcal * 0.25) / 7.7161791764707);
  }
  if (gainBtn.checked) {
    kcal *= 1.2;
    carbo = Math.round((kcal * 0.5) / 7.7161791764707);
    protein = Math.round((kcal * 0.3) / 7.7161791764707);
    fat = Math.round((kcal * 0.2) / 7.7161791764707);
  }
  document.getElementById("answer").innerHTML = "Estimated food energy: <b>" + Math.round(kcal) +
    " calories</b> by day.<br><br>" + "Your estimated macros by day are:<br>Carbohydrates: <b>" + carbo + "g</b><br>" + "Protein: <b>"
    + protein + "g</b><br>" + "Fat: <b>" + fat + "g</b><br><br>" + "<b>GOOD LUCK! :)</b>";
  document.getElementById("answer").style = "display: inline-block; color: green;";
}


function draw() {
  if (cubeMode) cubeDraw(gl, program, !wire);
  else if (sphereMode) sphereDraw(gl, program, !wire);
  else if (cylinderMode) cylinderDraw(gl, program, !wire);
  else if (bunnyMode) bunnyDraw(gl, program, !wire);
  else if (torusMode) torusDraw(gl, program, !wire);
  else sQuadricDraw(gl, program, !wire);
}