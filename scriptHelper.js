// Write your helper functions here!
require('isomorphic-fetch');
// const {document, pilot, fuelLevel, cargoLevel, coPilot, list} = require("./script");

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
                 <img src="${imageUrl}">
                 `;
*/

}
function validateInput(testInput) {
    // if (testInput === "" || testInput === undefined) {
    //     return "Empty";

    // } else if (isNaN(testInput)) {
    //     return "Not a Number";
    // } else if (!isNaN(testInput)) {
    //     return "Is a Number";
    // }

    if (testInput == "" ) {
        return "Empty";
    }else   if (isNaN(testInput)) {
        return "Not a Number";
    } else if (!isNaN(testInput)) {
        return "Is a Number";
    }

    // alert("All Fields Required!")
}





function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    // let cargoInput = document.getElementById("cargoLevel");
    // let fuelInput = document.getElementById("fuelLevel");
    // let pilotInput = document.getElementById("pilotStatus");
    // let copilotInput = document.getElementById("copilotStatus");
    let error1 = "";
    let error2 ="";
    let levelGuide = 10000;
    if(isNaN(pilot)&&isNaN(copilot)){
        if(cargoLevel > levelGuide &&fuelLevel < levelGuide){
            launchStatus.style.color ="red";
            list.style.visibility = "visible";
            pilotStatus.innerHTML =`Pilot ${pilot} is ready for Launch`;
            copilotStatus.innerHTML =`Copilot ${copilot} is ready for Launch`;
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo Level too heavy for launch"
        } else if(cargoLevel > levelGuide && fuelLevel>= levelGuide){
             launchStatus.style.color ="red";
            list.style.visibility = "visible";
            pilotStatus.innerHTML =`Pilot ${pilot} is ready for Launch`;
            copilotStatus.innerHTML =`Copilot ${copilot} is ready for Launch`;

        }
    }

    // if (validateInput(pilot)==="Empty" || validateInput(copilot)=== "Empty"|| validateInput(fuelLevel)=== "Empty"|| validateInput(cargoLevel)=== "Empty"){
    //     alert("All fields are required!");

    // } else if (validateInput(pilot)==="Is a number"||validateInput(copilot)==="Is a number"||validateInput(cargoLevel) ==="Not a Number"||validateInput(fuelLevel) ==="Not a Number" ){
    //     if(validateInput(pilot)==="Is a number"||validateInput(copilot)==="Is a number"){
    //         if(validateInput(pilot)==="Is a number" &&validateInput(copilot)==="Is a number"  ){
    //             error1 = "pilot and copilot"
    //         } else if (validateInput(pilot)==="Is a number"){
    //             error1 = "pilot"
    //         } else if (validateInput(copilot)==="Is a number"){
    //             error1 = "copilot"
    //         }
    //         console.log(`please enter a name for ${error1}`)
    //     } else if (validateInput(cargoLevel) ==="Not a Number"||validateInput(fuelLevel) ==="Not a Number" ){
    //         if(validateInput(cargoLevel) ==="Not a Number"&&validateInput(fuelLevel) ==="Not a Number" ){
    //             error2 = "cargo level and fuel level"
    //         } else if (validateInput(cargoLevel) ==="Not a Number"){
    //             error2 = "cargo level"
    //         } else if (validateInput(fuelLevel) ==="Not a Number" ){
    //             error2 = "fuel level"
    //         }
    //         console.log(`please enter a number for ${error2}`)

        }
    }
    // if (validateInput(cargoLevel) === "Not A Number" || validateInput(cargoLevel) === "Empty") {
    //       alert("Please Enter a Number for Cargo Level");
    //   }

    //   if (validateInput(fuelLevel) === "Not A Number" || validateInput(fuelLevel) === "Empty") {
    //       alert("Please Enter a Number for Fuel Level");
    //   }
    //   if (validateInput(coPilot) === "Empty" || validateInput(coPilot) === "Is a Number") {
    //       alert("coPilot must be made of letters and/or words");
    //   }
    //   if (validateInput(pilot) === "Empty" || validateInput(pilot) === "Is a Number") {
    //       alert("Pilot must be made of letters and/or words");
    //   }

}

async function myFetch() {
    let planetsReturned = "";

    planetsReturned = await fetch().then(function(response) {});

    return planetsReturned;
}

function pickPlanet(planets) {

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;