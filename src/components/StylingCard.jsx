import { FaBeer } from "react-icons/fa";
const StylingCard = () => {

  const copyHandler = ()=> {
    console.log("stop stealing my content");
    alert("Stop stealing my content!!"); 
  }  

  const mouseMove = ()=>{
    console.log("You are hovering over the beer!");
    alert("You found the beer!");
    
  }


  return <div style={{ backgroundColor: "lightblue", padding: "20px", borderRadius: "10px", color: "darkblue", margin: "20px", height: "370px", width: "300px" }} >
        <h1>Welcome have a beer down below!!</h1> <br />

        <p onCopy={copyHandler}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat porro magni architecto laboriosam recusandae distinctio, voluptate facilis, nesciunt aliquid eligendi quod officia dicta culpa alias. Quam molestiae voluptatum eveniet eum.
        </p>
        <h2><FaBeer onMouseMove={mouseMove} style={{ fontSize: "100px", color: "#FFA400", }}/> </h2>
  </div>
}

export default StylingCard;