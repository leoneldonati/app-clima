// Llamada a API
const getWeather = ev => {
  ev.preventDefault();

  const city = ev.target.city.value;
  const country = ev.target.country.value;

  const apiKey = "78e0a64427b6bbd47cda41f070cbc6bc";

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`;

  let weather = [];

  fetch(apiURL)
    .then((data) => {
      return data.json();
    })
    .then((data) => {return data.push(weather)} );

};

const weather = weather;

export default getWeather;
