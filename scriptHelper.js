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





function formSubmission(document, list, pilot, coPilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let coPilotStatus = document.getElementById("coPilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    // let cargoInput = document.getElementById("cargoLevel");
    // let fuelInput = document.getElementById("fuelLevel");
    // let pilotInput = document.getElementById("pilotStatus");
    // let coPilotInput = document.getElementById("coPilotStatus");
    let error1 = "";
    let error2 ="";
    let levelGuide = 10000;
    if(isNaN(pilot)&&isNaN(coPilot)){
         pilotStatus.innerHTML =`Pilot ${pilot} is ready for launch`;
        coPilotStatus.innerHTML =`Co-pilot ${coPilot} is ready for launch`;
    } else if(!isNaN(pilot)||!isNaN(coPilot)){
        if(!isNaN(pilot)){
             pilotStatus.innerHTML =`please enter a name for the pilot `;
              launchStatus.innerHTML= "Shuttle Not Ready for Launch";
              launchStatus.style.color ="rgb(199, 37, 78)";
              list.style.visibility = "visible";

             }
       if(!isNaN(coPilot)){
            coPilotStatus.innerHTML =`please enter a name for the coPilot `;
             launchStatus.innerHTML= "Shuttle Not Ready for Launch";
             list.style.visibility = "visible";
             launchStatus.style.color ="rgb(199, 37, 78)";
            }
        }
        if(cargoLevel > levelGuide &&fuelLevel < levelGuide){
            launchStatus.style.color ="rgb(199, 37, 78)";
             launchStatus.innerHTML= "Shuttle Not Ready for Launch";
            list.style.visibility = "visible";

            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        } else if(cargoLevel > levelGuide && fuelLevel>= levelGuide){
             launchStatus.style.color ="rgb(199, 37, 78)";
              launchStatus.innerHTML= "Shuttle Not Ready for Launch";
            list.style.visibility = "visible";
            //  fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";

        } else if(cargoLevel <= levelGuide && fuelLevel< levelGuide){
             fuelStatus.innerHTML = "Fuel level too low for launch";
            // cargoStatus.innerHTML = "Cargo mass too heavy for launch";
             launchStatus.style.color ="rgb(199, 37, 78)";
              launchStatus.innerHTML= "Shuttle Not Ready for Launch";
            list.style.visibility = "visible";
        }else if(cargoLevel <= levelGuide && fuelLevel>= levelGuide){
             fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
             launchStatus.style.color ="rgb(65, 159, 106)";
            list.style.visibility = "visible";
            launchStatus.innerHTML= "Shuttle is Ready for Launch"
        }
        if(cargoLevel <= levelGuide && fuelLevel>= levelGuide&& isNaN(pilot)&& isNaN(coPilot)){
            list.style.visibility = "hidden";
            pilotStatus.innerHTML =`Pilot ${pilot} is ready for launch`;
            coPilotStatus.innerHTML =`Co-pilot ${coPilot} is ready for launch`;
             launchStatus.style.color ="rgb(65, 159, 106)";
             launchStatus.innerHTML= "Shuttle is Ready for Launch"
        }




    // if (validateInput(pilot)==="Empty" || validateInput(coPilot)=== "Empty"|| validateInput(fuelLevel)=== "Empty"|| validateInput(cargoLevel)=== "Empty"){
    //     alert("All fields are required!");

    // } else if (validateInput(pilot)==="Is a number"||validateInput(coPilot)==="Is a number"||validateInput(cargoLevel) ==="Not a Number"||validateInput(fuelLevel) ==="Not a Number" ){
    //     if(validateInput(pilot)==="Is a number"||validateInput(coPilot)==="Is a number"){
    //         if(validateInput(pilot)==="Is a number" &&validateInput(coPilot)==="Is a number"  ){
    //             error1 = "pilot and coPilot"
    //         } else if (validateInput(pilot)==="Is a number"){
    //             error1 = "pilot"
    //         } else if (validateInput(coPilot)==="Is a number"){
    //             error1 = "coPilot"
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