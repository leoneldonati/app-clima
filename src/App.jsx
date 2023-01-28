
import './App.css'
import { WeatherForm } from './components/weatherForm'





function App() {

 
const apiKey = '78e0a64427b6bbd47cda41f070cbc6bc';

const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`

const getWeather = () => {
    fetch(apiURL)
   .then(( response ) => response.json())
   .then((data) => console.log(data))
   
}

  return (
    <div className="App">
    <WeatherForm />
    <WeatherInfo 
        temp=''
        city=''
        country=''
        windSpeed=''
        humidity=''        
/>
    </div>
  )
}

export default App
