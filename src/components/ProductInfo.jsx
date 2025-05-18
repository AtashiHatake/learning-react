const ProductInfo = () => {
  const Product = {
    name: "Laptop",
    price: 1200,
    availability: "In Stock"
  }
  return (
    <div>
        <h1>Name: {Product.name}</h1>
        <h1>Price: ${Product.price}</h1>
        <h1>Availability: {Product.availability}</h1>
    </div>
  )
}

export default ProductInfo;