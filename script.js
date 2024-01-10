//DOM elements
const weight = document.getElementById("weight");

const submit = document.getElementById("submit-button");

//weight number elements

const celestialBodyTexts = {
    sun: document.getElementById("sun-weight"),
    mercury: document.getElementById("mercury-weight"),
    venus: document.getElementById("venus-weight"),
    earth: document.getElementById("earth-weight"),
    earthmoon: document.getElementById("earthmoon-weight"),
    mars: document.getElementById("mars-weight"),
    jupiter: document.getElementById("jupiter-weight"),
    saturn: document.getElementById("saturn-weight"),
    uranus: document.getElementById("uranus-weight"),
    neptune: document.getElementById("neptune-weight"),
    pluto: document.getElementById("pluto-weight")
}

const celestialBodyWeights = {
    sun: 27.01,
    mercury: 0.38,
    venus: 0.91,
    earth: 1,
    earthmoon: 0.166,
    mars: 0.38,
    jupiter: 2.34,
    saturn: 1.06,
    uranus: 0.92,
    neptune: 1.19,
    pluto: 0.06
}

function updateWeights() {
    for (const key in celestialBodyTexts) {
        if (Object.hasOwnProperty.call(celestialBodyTexts, key)) {
            celestialBodyTexts[key].textContent = (weight.value * celestialBodyWeights[key]).toFixed(2);
        }
    }
}

submit.addEventListener("click", updateWeights);