import { h2 } from 'motion/react-client';
import { useState, useEffect } from 'react';

const UseEffectFetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        const parsedData = await res.json();

        if(parsedData && parsedData.length) {
            setData(parsedData);
        };
    }

    getData();

  }, []);

  return (
    <div>
        <h1>First Post data:</h1>
        <br />
        <ul  style={{ listStyleType: "disc", paddingLeft: "20px" }} >
            {data.length > 0 ? <h2>Title: {data[0].title}</h2> : <p>Loading...</p>}
        </ul>
    </div>
  )
}

export default UseEffectFetchData;