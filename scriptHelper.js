// Write your helper functions here!
require('isomorphic-fetch');
// const {document, pilot, fuelLevel, cargoLevel, coPilot, list} = require("./script");

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let destination = document.getElementById("missionTarget");
    destination.innerHTML =`
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
                 `;
    // destination.innerHTML = `
    //     <h2>MissionDestination</h2>
    //         <ol>
    //             <li>Name: ${name}</li>
    //             <li>Diameter: ${diameter}</li>
    //             <li>Star: ${star}</li>
    //             <li>Distance from Earth: ${distance}</li>
    //             <li>Number of Moons: ${moons}</li>
    //         </ol>
    //         <imgsrc="https://solarsystem.nasa.gov/system/resources/detail_files/16278_PIA20016.jpg">
    // `


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
    if(isNaN(pilotName)&&isNaN(copilotName)){
         pilotStatus.innerHTML =`Pilot ${pilotName} is ready for launch`;
        copilotStatus.innerHTML =`Co-pilot ${copilotName} is ready for launch`;
    } else if(!isNaN(pilotName)||!isNaN(copilotName)){
        if(!isNaN(pilotName)){
             pilotStatus.innerHTML =`please enter a name for the pilot `;
              launchStatus.innerHTML= "Shuttle Not Ready for Launch";
              launchStatus.style.color ="rgb(199, 37, 78)";
              list.style.visibility = "visible";

             }
       if(!isNaN(copilotName)){
            copilotStatus.innerHTML =`please enter a name for the copilot `;
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
             fuelStatus.innerHTML = "Fuel level high enough for launch";
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
        } else if(cargoLevel <= levelGuide && fuelLevel>= levelGuide&& isNaN(pilot)&& isNaN(copilot)){
            list.style.visibility = "visible";
            pilotStatus.innerHTML =`Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML =`Co-pilot ${copilot} is ready for launch`;
             launchStatus.style.color ="rgb(65, 159, 106)";
        } else {
            //  list.style.visibility = "visible";
            // pilotStatus.innerHTML =`Pilot ${pilot} is ready for launch`;
            // copilotStatus.innerHTML =`Co-pilot ${copilot} is ready for launch`;
             launchStatus.style.color ="rgb(65, 159, 106)";
             list.style.visibility="hidden";
             pilotStatus.textContent="Pilot Ready";
             copilotStatus.textContent="Co-pilot Ready";
             fuelStatus.textContent="Fuel level high enough for launch";
             cargoStatus.textContent="Cargo mass low enough for launch";
        }
    //     list.style.visibility="hidden"
    //  pilotStatus.textContent="Pilot Ready"
    //   copilotStatus.textContent="Co-pilot Ready"
    //   fuelStatus.textContent="Fuel level high enough for launch"
    //   cargoStatus.textContent="Cargo mass low enough for launch"
        if(cargoLevel <= levelGuide && fuelLevel>= levelGuide&& isNaN(pilot)&&   isNaN(copilot)){
            list.style.visibility = "visible";
            pilotStatus.innerHTML =`Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML =`Co-pilot ${copilot} is ready for launch`;
             launchStatus.style.color ="rgb(65, 159, 106)";
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
    let webPage = "https://handlers.education.launchcode.org/static/planets.json";

    planetsReturned = await fetch(webPage).then(function(response) {


        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomlyPickedPlanet = Math.floor(Math.random()*planets.length);
    let planetPicked = planets[randomlyPickedPlanet];
    return planetPicked;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;