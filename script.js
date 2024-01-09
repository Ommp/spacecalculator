//DOM elements
const weight = document.getElementById("weight");

const submit = document.getElementById("submit-button");

//weight number elements
const sunText = document.getElementById("sun-weight");
const mercuryText = document.getElementById("mercury-weight");
const venusText = document.getElementById("venus-weight");
const earthText = document.getElementById("earth-weight");
const earthmoonText = document.getElementById("earthmoon-weight");
const marsText = document.getElementById("mars-weight");
const jupiterText = document.getElementById("jupiter-weight");
const saturnText = document.getElementById("saturn-weight");
const uranusText = document.getElementById("uranus-weight");
const neptuneText = document.getElementById("neptune-weight");
const plutoText = document.getElementById("pluto-weight");

//weights
const sun = 27.01;
const mercury = 0.38;
const venus = 0.91;
const earth = 1;
const earthmoon = 0.166;
const mars = 0.38;
const jupiter = 2.34;
const saturn = 1.06;
const uranus = 0.92;
const neptune = 1.19;
const pluto = 0.06;


function updateWeights() {
    sunText.textContent = weight.value*sun;
    mercuryText.textContent = weight.value*mercury;
    venusText.textContent = weight.value*venus;
    earthText.textContent = weight.value*earth;
    earthmoonText.textContent = weight.value*earthmoon;
    marsText.textContent = weight.value*mars;
    jupiterText.textContent = weight.value*jupiter;
    saturnText.textContent = weight.value*saturn;
    uranusText.textContent = weight.value*uranus;
    neptuneText.textContent = weight.value*neptune;
    plutoText.textContent = weight.value*pluto;
}

submit.addEventListener("click", updateWeights);