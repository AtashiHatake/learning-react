const ConditionalRendering = () => {
  const CartItems = ["Oranges", "Earbuds", "Power Bank", "Type C Wire"];

  return <div>
    <h1>Cart </h1>
    {CartItems.length > 0 && <h2> You Have {CartItems.length} items in your cart</h2>}

    <ul>
        <h4>Products in cart: </h4>
        {CartItems.map(CartItems => (
            <li key={Math.random()}>{CartItems}</li>
        ))}
    </ul>
  </div>
}

export default ConditionalRendering;