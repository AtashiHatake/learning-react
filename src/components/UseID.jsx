import { useId } from "react"

const UseID = () => {
  const id = useId() 
  return (
    <div>
        <label htmlFor="{`${id}-email`}">Email</label>
        <input type="email" name="" id={`${id}-email`} />
        <br />
         <label htmlFor="{`${id}-password`}">Password</label>
        <input type="password" name="" id={`${id}-password`} />
    </div>
  )
}

export default UseID