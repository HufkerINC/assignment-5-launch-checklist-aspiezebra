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
    list.style.visibility = "hidden";
    // let cargoInput = document.getElementById("cargoLevel");
    // let fuelInput = document.getElementById("fuelLevel");
    // let pilotInput = document.getElementById("pilotStatus");
    // let copilotInput = document.getElementById("copilotStatus");
    let error1 = "";
    let error2 ="";
    let levelGuide = 10000;
    if(isNaN(pilot)&&isNaN(copilot)){
         pilotStatus.innerHTML =`Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML =`Co-pilot ${copilot} is ready for launch`;
    } else if(!isNaN(pilot)||!isNaN(copilot)){
        if(!isNaN(pilot)){
             pilotStatus.innerHTML =`please enter a name for the pilot `;
              launchStatus.innerHTML= "Shuttle Not Ready for Launch";
              launchStatus.style.color ="rgb(199, 37, 78)";
              list.style.visibility = "visible";

             }
       if(!isNaN(copilot)){
            copilotStatus.innerHTML =`please enter a name for the copilot `;
             launchStatus.innerHTML= "Shuttle Not Ready for Launch";
             list.style.visibility = "visible";
             launchStatus.style.color ="rgb(199, 37, 78)";
            }
        }
        if(cargoLevel > 10000 || fuelLevel < 10000){
            launchStatus.style.color ="rgb(199, 37, 78)";
             launchStatus.innerHTML= "Shuttle Not Ready for Launch";
            list.style.visibility = "visible";
            if(cargoLevel > 10000 &&fuelLevel < 10000){
            launchStatus.style.color ="rgb(199, 37, 78)";
             launchStatus.innerHTML= "Shuttle Not Ready for Launch";
            list.style.visibility = "visible";

            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            }else if(cargoLevel > 10000){
            //  launchStatus.style.color ="rgb(199, 37, 78)";
            //   launchStatus.innerHTML= "Shuttle Not Ready for Launch";
            // list.style.visibility = "visible";
            //  fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            } else if(fuelLevel < 10000){
             fuelStatus.innerHTML = "Fuel level too low for launch";
            // cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            //  launchStatus.style.color ="rgb(199, 37, 78)";
            //   launchStatus.innerHTML= "Shuttle Not Ready for Launch";
            // list.style.visibility = "visible";
            }
        } else { list.style.visibility = "visible";
        launchStatus.style.color = 'rgb(65, 159, 106)';
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        }


  if(cargoLevel > 10000 && fuelLevel>= 10000){
             launchStatus.style.color ="rgb(199, 37, 78)";
              launchStatus.innerHTML= "Shuttle Not Ready for Launch";
            list.style.visibility = "visible";
             fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";

        } else if(cargoLevel <= 10000 && fuelLevel< 10000){
             fuelStatus.innerHTML = "Fuel level too low for launch";
            // cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            //Fuel level too low for launch
             launchStatus.style.color ="rgb(199, 37, 78)";
              launchStatus.innerHTML= "Shuttle Not Ready for Launch";
            list.style.visibility = "visible";
        }else if(cargoLevel <= 10000 && fuelLevel>= 10000){
             fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
             launchStatus.style.color ="rgb(65, 159, 106)";
            list.style.visibility = "visible";
            launchStatus.innerHTML= "Shuttle is Ready for Launch"
        } else if(cargoLevel <= 10000 && fuelLevel>= 10000&& isNaN(pilot)&& isNaN(copilot)){
            list.style.visibility = "visible";

            pilotStatus.innerHTML =`Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML =`Co-pilot ${copilot} is ready for launch`;
             launchStatus.style.color ="rgb(65, 159, 106)";
        } else {
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
             launchStatus.style.color ="rgb(199, 37, 78)";
             list.style.visibility="hidden";
             pilotStatus.textContent=`Pilot ${pilot} is ready for launch`;
             copilotStatus.textContent=`Co-pilot ${copilot} is ready for launch`;
             fuelStatus.textContent="Fuel level high enough for launch";
             cargoStatus.textContent="Cargo mass low enough for launch";
        }


        if(cargoLevel <= 10000 && fuelLevel>= 10000&& isNaN(pilot)&&   isNaN(copilot)){
            // list.style.visibility = "hidden";
            pilotStatus.innerHTML =`Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML =`Co-pilot ${copilot} is ready for launch`;
             launchStatus.style.color ="rgb(65, 159, 106)";
        }





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