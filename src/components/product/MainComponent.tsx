import React, { useState } from 'react';
import { IProduct } from '../interfaces/product.dao';
import Cart from './shoppingСart/Cart';

interface MainComponentProps {
  onAddToCart: (product: IProduct) => void;
}

const MainComponent: React.FC<MainComponentProps> = ({ onAddToCart }) => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  
  const handleAddToCart = (product: IProduct) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (productId: number) => {
    
    const index = cartItems.findIndex((item) => item.id === productId);
    if (index !== -1) {
    
      const updatedCart = [...cartItems];
      updatedCart.splice(index, 1);
      setCartItems(updatedCart);
    }
  };

  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
        </div>
      ))}
    
      <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
};

export default MainComponent;
