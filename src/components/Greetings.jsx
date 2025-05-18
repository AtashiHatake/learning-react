const Greetings = () => {
  const name = "Atharva";
  const today = new Date();
  
  return (
    <div>
        <h1>Greetings {name}</h1>
        <p>Today's date is: {today.getDate()}-{today.getMonth()+1}-{today.getFullYear()}</p>
    </div>
  )
}

export default Greetings;