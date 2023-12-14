let searchTerm = document.getElementById("searchBlock");
searchTerm.addEventListener("keyup", e => {
  let value = e.target.value;
  if (e.key == "Enter") {
    // console.log(getApiResult.value);
    getApiResult(value);
  }
});

let getApiResult = async username => {
  let response = await window.fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${username}&APPID=964a87b987389748601aba1dced1e380`
  );
  let {weather,name,main,wind} = await response.json();
  document.getElementById("show").innerHTML = `
    <div class="items">
     <img src=http://openweathermap.org/img/w/${weather[0].icon}.png> 
      <p><h3>City:${name}</h3></p>
      <p><h3>Temperature:${main.temp}<span aria-label="°Fahrenheit">°F</span></h3></p>
      <p><h3>Pressure:${main.pressure}</h3></p>
        <p><h3>Humidity:${main.humidity}%</h3></p>
         <p><h3>wind Speed:${wind.speed}km/h</h3></p>
        
     
    </div>`;
};
