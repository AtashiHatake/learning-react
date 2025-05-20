const ProductList = () => {
const products = [
    {id:1, name: "Phone", price: 699},
    {id:2, name: "Laptop", price: 1200},
    {id:3, name: "TV", price: 199},
  ];
  return (
    <main>
        <h3>Products</h3>
        {products.map((product)=>(
            <div key={product.id}>
                <ul>
                    <li>{product.name}</li>
                    <li>${product.price}</li>
                </ul>
            </div>
        ))}
    </main>
  )
}

export default ProductList;
