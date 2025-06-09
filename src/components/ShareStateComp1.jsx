const ShareStateComp1 = ({count, onClickHandler, onClickDec, onReset}) => {

  const handleClick = () => onClickHandler();
  const handleDec = () => onClickDec();
  return (
    <div>
        <p>{count}</p>
        {/*

        <button style={{ border:"1px solid black", padding:"3px" }} onClick={handleClick} >Increment</button>

        <button style={{ border:"1px solid black", padding:"3px", marginLeft:"10px" }}  onClick={handleDec} >decrement</button>

        */}
    </div>
  )
}

export default ShareStateComp1