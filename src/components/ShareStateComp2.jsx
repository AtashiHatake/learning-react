const ShareStateComp2 = ({count, onClickHandler, onClickDec, onReset}) => {
  
  const handleClick = () => onClickHandler();
  const handleDec = () => onClickDec();
  const handleRes = () => onReset();
  return (
    <div>
        <p>{count}</p>

        <button style={{ border:"1px solid black", padding:"3px" }} onClick={handleClick} >Increment</button>

        <button style={{ border:"1px solid black", padding:"3px", marginLeft:"10px" }}  onClick={handleDec} >decrement</button>

         <button style={{ border:"1px solid black", padding:"3px", marginLeft:"10px" }}  onClick={handleRes} >Reset</button>
    </div>
  )
}

export default ShareStateComp2