const CondRenderWeather = () => {
  const Temp = [0, 3, 8, 15, 18, 20, 25, 30, 32, 34];
  const temperatureToday = Temp[4];

  function todyTemp() {
    if (temperatureToday < 15) {
        return <h4>It is cold today</h4>
    }
    else if (temperatureToday > 15 && temperatureToday < 25) {
        return <h4>It is nice outside</h4>
    }
    else {
        return <h4>It is hot outside</h4>
    }
  }

  return <div>
    <h1>How the weather is today: </h1>
    <h3>The weather today is: {todyTemp()}</h3>
  </div>
}

export default CondRenderWeather;