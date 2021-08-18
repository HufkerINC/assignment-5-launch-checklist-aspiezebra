// // Write your JavaScript code here!
// const { myFetch, planetPicked } = require("./scriptHelper");

// addEventListener("load", function() {
//     let document = window.document
//     let pilot = document.querySelector("input[name=pilotName]");
//     let fuelLevel = document.querySelector("input[name=fuelLevel]");
//     let cargoLevel = document.querySelector("input[name=cargoLevel]");
//     let copilot = document.querySelector("input[name=coPilotName]");
//     let list = document.getElementById("faultyItems");
//     list.style.visibility = "hidden";
//     let form = document.querySelector("form");
//     form.addEventListener("submit", function(event) {
//         formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
//         if (validateInput(copilot.value) == "Empty" || validateInput(pilot.value) == "Empty" || validateInput(fuelLevel.value) == "Empty" || validateInput(cargoLevel.value) == "Empty") {
//             window.alert('All fields are Required!!!');
//             list.style.visibility = "hidden";
//             event.preventDefault();
//         }
//         if (validateInput(pilot.value) == "Is a Number" || validateInput(copilot.value) == "Is a Number") {
//             list.style.visibility = "hidden";
//             window.alert("Enter a name for Pilot and Co-pilot.");
//             event.preventDefault();
//         }

//         if (validateInput(fuelLevel.value) == "Not a Number" || validateInput(cargoLevel.value) == "Not a Number") {
//             list.style.visibility = "hidden";
//             window.alert("Fuel Level and Cargo Mass should be Numbers");
//             event.preventDefault();
//         }
//         event.preventDefault();
//     })


    

// })
// let listedPlanets;
// // Set listedPlanetsResponse equal to the value returned by calling myFetch()
// let listedPlanetsResponse = myFetch();
// listedPlanetsResponse.then(function(result) {
//     listedPlanets = result;
//     console.log(listedPlanets);
// }).then(function() {
//     console.log(listedPlanets);
//     let planetPicked = planetPicked(listedPlanets);
//     addDestinationInfo(window.document, planetPicked.name, planetPicked.diameter, planetPicked.star, planetPicked.distance, planetPicked.moons, planetPicked.image);
//     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
// })


// // module.exports.addDestinationInfo = addDestinationInfo;
// // module.exports.validateInput= validateInput;
// // module.exports.formSubmission= formSubmission;
// // module.exports.planetPicked=planetPicked;
// // module.exports.myFetch=myFetch;

// Write your JavaScript code here!
// const { myFetch, planetPicked } = require("./scriptHelper");
require('isomorphic-fetch');
// window.addEventListener("load", function() {
//             let listedPlanets;
//             // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//             let listedPlanetsResponse = myFetch();
//             listedPlanetsResponse.then(function(result) {
//                 listedPlanets = result;
//                 console.log(listedPlanets);
//             }).then(function() {
//                 console.log(listedPlanets);
//                 // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//                 let listedPlanet = pickPlanet(listedPlanets)
//                 console.log(listedPlanet)
//                 addDestinationInfo(document, listedPlanet.name, listedPlanet.diameter, listedPlanet.star, listedPlanet.distance, listedPlanet.moons, listedPlanet.image)

//             })
//
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/planets.json")
        .then(function(response) {
            response.json()
                .then(function(json) {
                    let r = Math.floor(Math.random() * json.length);
                    const mission = document.getElementById("missionTarget");
                    mission.innerHTML =
                        `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[r].name}</li>
            <li>Diameter: ${json[r].diameter}</li>
            <li>Star: ${json[r].star}</li>
            <li>Distance from Earth: ${json[r].distance}</li>
            <li>Number of Moons: ${json[r].moons}</li>
         </ol>
         <img src="${json[r].image}"></img>
         `
                })
        })
})
let listStatus = document.getElementById("faultyItems")
listStatus.style.visibility = "hidden"
    // let form = this.document.querySelector("form")
let form = document.querySelector("form")

//     let listedPlanets;
//     // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//     // let listedPlanetsResponse = "";
//     let listedPlanetsResponse = myFetch();
//     listedPlanetsResponse.then(function(result) {
//         listedPlanets = result;


//         console.log(listedPlanets);
//     }).then(function() {
//         console.log(listedPlanets);
//         let myPlanet = pickPlanet(listedPlanets);
//        console.log(listedPlanet)
//         addDestinationInfo(document, listedPlanet.name, listedPlanet.diameter, listedPlanet.star, listedPlanet.distance, listedPlanet.moons, listedPlanet.image)



//         // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//     })
// //  console.log(listedPlanets);
// //         let myPlanet = pickPlanet(listedPlanets);
// //        console.log(listedPlanet)
// //         addDestinationInfo(document, listedPlanet.name, listedPlanet.diameter, listedPlanet.star, listedPlanet.distance, listedPlanet.moons, listedPlanet.image)





form.addEventListener("submit", function(event) {
    event.preventDefault();
    let pilot = document.querySelector("input[name=pilotName]")
    let pilotName = pilot.value

    let fuel = document.querySelector("input[name=fuelLevel]")

    let fuelLevel = fuel.value
    let copilot = document.querySelector("input[name=copilotName]")
    let copilotName = copilot.value
    let cargo = document.querySelector("input[name=cargoMass]")
    let cargoMass = cargo.value
    formSubmission(document, launchStatus, pilotName, copilotName, fuelLevel, cargoMass);
});
// });
//     let document = window.document;
