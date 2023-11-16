function allData() {
  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      Cards(data);
    })
    
}

function Cards(data) {
  const Container = document.getElementById('container');
  data.forEach(data1 => {
    const card = document.createElement('div');
    card.classList.add('col-lg-4', 'mb-4','col-sm-12');

    card.innerHTML = `
    
    <br>
      <div class="card">
      
      <h5 class="card-title">${data1.name.common}</h5>
        <img src="${data1.flags.png}" class="card-img-top" alt="${data1.name.common}">
        <div class="card-body">
          
          <p class="card-text">Capital: ${data1.capital[0]}</p>
          <p class="card-text">Region: ${data1.region}</p>
          <p class="card-text">Population: ${data1.population}</p>
          <p class="card-text">Latlng: ${data1.latlng}</p>
          <button class="btn btn-primary" onclick="Weather('${data1.capital[0]}')">Click for weather</button>
          <div id="${data1.capital[0]}-weather"></div>
        </div>
      </div>
    `;

    Container.appendChild(card);
  });
}
function Weather(city) {
  
  const apiKey = 'e07926900654565633059e8a5d22cda8';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
         
          const div = document.getElementById(`${city}-weather`);
          div.innerHTML = `Temperature: ${data.main.temp}°C, Weather: ${data.weather[0].description}`;
      })
      .catch(error => console.error('Error: ', error));
}


allData();

