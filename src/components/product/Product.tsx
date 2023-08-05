import React from 'react';
import ProductList from './productList/ProductList';
import ProductDetails from './productDetails/ProductDetails';
import { IProduct } from '../interfaces/product.dao';
import { products } from './productData';
import Cart from './shoppingСart/Cart';
import './productDetails/productDetails.scss';
import './product.scss';

const ProductPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = React.useState<IProduct | null>(null);
  const [cartItems, setCartItems] = React.useState<IProduct[]>([]);
  const [isOrderPlaced, setIsOrderPlaced] = React.useState(false);
  const [isOrderAgain, setIsOrderAgain] = React.useState(false);

  const handleProductSelection = (product: IProduct) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product: IProduct) => {
    setCartItems([...cartItems, product]);
    handleCloseDetails();
  };

  const handlePlaceOrder = () => {
    setCartItems([]);
    setIsOrderPlaced(true);
    setIsOrderAgain(true);
  };

  const handleRemoveFromCart = (productId: number) => {
   
    const index = cartItems.findIndex((item) => item.id === productId);
    if (index !== -1) {
     
      const updatedCart = [...cartItems];
      updatedCart.splice(index, 1);
      setCartItems(updatedCart);
    }
  };

  const handleOrderAgain = () => {
    setIsOrderAgain(false); 
    setIsOrderPlaced(false); 
  };

  return (
    <div>
      {selectedProduct && (
        <div className="modal">
          <ProductDetails
            product={selectedProduct}
            onClose={handleCloseDetails}
            onAddToCart={handleAddToCart}
          />
        </div>
      )}
      <ProductList products={products} onProductSelect={handleProductSelection} />
      <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
      {cartItems.length > 0 && !isOrderPlaced && (
        <button className="order-button" onClick={handlePlaceOrder}>
          Оформити замовлення
        </button>
      )}
      {isOrderPlaced && (
        <div>
          <p className="order-success-message">Дякую за замовлення!</p>
          {isOrderAgain && (
            <button className="order-button" onClick={handleOrderAgain}>
              Зробити ще одне замовлення
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductPage;