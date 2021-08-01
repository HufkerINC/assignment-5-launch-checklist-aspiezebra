// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
    if (testInput === "" || testInput === undefined) {
        return "Empty"
    } else if ((!isNaN(testInput))) {
        return "Is a Number"
    } else if (isNaN(testInput)) {
        return "Not a Number"
    }



    alert("All Fields Required!!!!")
}


}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (typeof(pilot) != string || typeof(copilot) != string) {
        alert("Please enter a valid  name")
    }
    if (isNaN(fuelLevel) = true) {
        alert("Please enter valid Level")

    }
    if (isNaN(cargoLevel) = true) {
        alert("Please enter valid Level")

    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function(response) {});

    return planetsReturned;
}

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;