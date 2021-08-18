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