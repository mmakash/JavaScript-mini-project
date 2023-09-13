const api = {
    key: "28fd15358cdecbc1a1dfef367e71acef",
    base: "https://api.openweathermap.org/data/2.5/"
}

const btn = document.querySelector('.btn');
const search = document.querySelector('.search');
btn.addEventListener("click",getData);

function getDate(){
    const d = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();
  
    return `${day}, ${date}, ${month}, ${year}`;
  }

  function getData(){
    fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`)
    .then(res => res.json()).then(data => {
        displayData(data);
    })
  }
  function displayData(data){
      if(data.cod === "404"){
          search.value = "";
          alert("City not found");
          return;
      }
      else{
        const city = document.querySelector('.location .city');
        city.innerText = data.name;
        const date = document.querySelector('.location .date');
        date.innerText = getDate();
        const temp = document.querySelector('.current .temp');
        temp.innerHTML = `${Math.round(data.main.temp)}<span>°C</span>`;
        const weather = document.querySelector('.current .weather');
        weather.innerText = data.weather[0].main;
        const range = document.querySelector('.current .temp-range');
        range.innerText = `${Math.round(data.main.temp_min)}°C / ${Math.round(data.main.temp_max)}°C`;}
  }