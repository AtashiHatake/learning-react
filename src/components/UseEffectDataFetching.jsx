import { useEffect, useState } from "react";

const UseEffectDataFetching = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const parsedData = await response.json();

        if(parsedData && parsedData.length) {
            setData(parsedData);
        };
    }

    getData();

  }, []); {/* [] due to this call back only runs once */}

  return (
    <div>
        <ul  style={{ listStyleType: "disc", paddingLeft: "20px" }} >
            {data.map(item => (
                <li style={{marginBottom:"5px"}} key={item.id}> Todo:{item.id} {item.title} <br /> Status: {item.completed ? "Completed" : "Not Completed"}</li> 
            ))}
        </ul>
    </div>
  )
}

export default UseEffectDataFetching;