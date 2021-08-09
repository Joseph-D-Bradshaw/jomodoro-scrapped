const profilesContainer = document.querySelector("#profilesContainer")
const chosenContainer = document.querySelector("#chosenContainer")

const pomodoroProfiles = [
  { name: "Work", color: "#0E1C36", time: 25, selected: true },
  { name: "Play", color: "#0E1C36", time: 10, selected: false },
  { name: "Study", color: "#0E1C36", time: 30, selected: false},
  { name: "Relax", color: "#0E1C36", time: 15, selected: false },
]
const dummyProfile = {name: "Test", color: "#0E1C36", time: 12}

const addProfile = ({name, color, time}) => {
    const add = profilesContainer.querySelector('.add');
    add.parentElement.removeChild(add);
    profilesContainer.innerHTML += `
    <div class="card" style="background-color: ${color}">
      <h1 class="card--title">${name}</h1>
      <h2 class="card--time">${time}</h2>
      <a class="card--link" href="#">Start</a>
    </div>
    `
    profilesContainer.innerHTML += `
    <div class="add">
        ${add.innerHTML}
    </div>
    `
}

const showChosen = () => {
    pomodoroProfiles.forEach(
     ({name, time, selected}) => {
         if (selected) {
            chosenContainer.innerHTML = `
                <div class="card card--chosen">
                    <h1 class="card--title">Chosen Jomodoro</h1>
                    <h2 class="card--title">${name}</h2>
                    <p class="card--time">Length: ${time}</p>
                    <a class="card--link" href="#">Start</a>
                </div>
            `    
         }
     }
    )
}

const showProfiles = () => {
    let output = ""
    pomodoroProfiles.forEach(
      ({ name, color, time }) =>
        (output += `
                <div class="card" style="background-color: ${color}">
                  <h1 class="card--title">${name}</h1>
                  <h2 class="card--time">${time}</h2>
                  <a class="card--link" href="#">Start</a>
                </div>
                `)
    )
    output += `
            <div class="add">
                <a class="add--icon" onclick="addProfile(dummyProfile)"></a>
                <h2>Another?</h1>
            </div>
    `
    profilesContainer.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showProfiles)
  document.addEventListener("DOMContentLoaded", showChosen)

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }