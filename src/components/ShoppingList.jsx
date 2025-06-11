import { li } from "motion/react-client";
import { useState } from "react";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !quantity) return;

    if(name.trim() && quantity.trim()) {
        setItems([...items, {name: name, quantity: quantity}]);
        setName('');
        setQuantity('');
    }

    setItems([...items, {name: name, quantity: quantity}]);
  };
  
  return (
    <div style={{ maxWidth: '400px', margin: '30px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Shopping List:</h1>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input 
              type="text" 
              placeholder="item name" 
              value={name} 
              onChange={e => setName(e.target.value)} 
              style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} 
            />

            <input 
              type="number" 
              placeholder="item quantity" 
              value={quantity} 
              onChange={e => setQuantity(e.target.value)} 
              style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} 
            />

            <button 
              type="submit" 
              style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Add Item
            </button>
        </form>

        <ul style={{ marginTop: '20px', paddingLeft: '20px' }}>
            {items.map((item, index) => (
                <li key={index} style={{ padding: '5px 0' }}>
                    {item.name} - Quantity: {item.quantity}
                </li>
            ))}
        </ul>
    </div>
  );
};

export default ShoppingList;
