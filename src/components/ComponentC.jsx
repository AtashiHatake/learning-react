import { useContext } from "react";
import { nameData, multipleData } from "../App";


const ComponentC = () => {
   const userName = useContext(nameData);
   const userAge = useContext(multipleData);
  return (
    
    <h1>My name is {userName} and my age is {userAge}</h1>

    /* This is createContext API example
        <nameData.Consumer>
        {(name) => {
            return (
                <multipleData.Consumer>
                    {(age) => {
                        return <h1>My name is: {name} and my age is {age}</h1>
                    }}
                </multipleData.Consumer>
            )
        }}
    </nameData.Consumer>
    */
    
  )
}

export default ComponentC