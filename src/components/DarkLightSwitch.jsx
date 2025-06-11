import { useState } from "react";

const DarkLightSwitch = () => {
  const [sw, setSw] = useState(false);
  return (
    <div>
        { sw ? (
            <span>Dark</span>
        ) : (
            <span>Light</span>
        ) }

        <br />

        <input type="text" key={sw ? "dark" : "light"} placeholder={sw ? "dark mode" : "light mode"}/>
        <button onClick={() => setSw(s => !s)} >Switch</button>
    </div>
  )
}

export default DarkLightSwitch