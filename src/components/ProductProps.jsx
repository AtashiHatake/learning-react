const ProductProps = (props) => {
  let Stock;
  if(props.inStock == false){
    Stock = "No";
  }
  else{
    Stock="Yes";
  }

  return (
    <div className="w-80 m-20 border-2 border-blue-900 p-3 text-center">
        <h1 className="text-blue-900 font-bold">Name: {props.name}</h1>
        <h2 className="text-blue-900 font-bold">Price: ${props.price}</h2>
        <h2 className="text-blue-900 font-bold">In Stock: {Stock}</h2>
        <img className="w-50 h-50 rounded-full mx-auto mt-3" src={props.img} alt={props.name} />
    </div>
  )
}

export default ProductProps;