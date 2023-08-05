import React from 'react';
import { IProduct } from '../../interfaces/product.dao';
import './cart.scss';

interface CartProps {
  cartItems: IProduct[];
  onRemoveFromCart: (productId: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div className="cart-container">
      <h2 className="cart-header">Кошик</h2>
      {cartItems.length === 0 ? (
        <p className="cart-empty">Кошик порожній.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <span className="cart-item-name">{item.name}</span>
              <span className="cart-item-price">${item.price}</span>
              <button className="cart-item-remove-button" onClick={() => onRemoveFromCart(item.id)}>Видалити</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
