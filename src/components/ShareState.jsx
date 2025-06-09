import { useState } from 'react'
import ShareStateComp1 from './ShareStateComp1';
import ShareStateComp2 from './ShareStateComp2';


const ShareState = () => {
  
  const[count, setCount] = useState(0);
  return (
    <div style={{ border: "2px solid black", padding:"10px", marginTop: "20px" }}>
        <ShareStateComp1 count = {count} onClickHandler = {()=> setCount(count + 1)} onClickDec = {()=> setCount(count-1)} onReset = {()=> setCount(0)}/>
        <ShareStateComp2 count = {count} onClickHandler = {()=> setCount(count + 1)} onClickDec = {()=> setCount(count-1)} onReset = {()=> setCount(0)}/>
    </div>
  )
}

export default ShareState;