// Write your JavaScript code here!
const {myFetch, pickPlanet} = require("./scriptHelper");
addEventListener("load", function() {
    let document = window.document
    let pilot = document.querySelector("input[name=pilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoLevel = document.querySelector("input[name=cargoLevel]");
    let coPilot = document.querySelector("input[name=coPilotName]");
    let list = document.getElementById("faultyItems");
    let listedPlanets ="enter";
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse="enter" ;
    listedPlanetsResponse.then(function(result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function() {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })

});
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput= validateInput;
module.exports.formSubmission= formSubmission;
module.exports.pickPlanet=pickPlanet;
module.exports.myFetch=myFetch;