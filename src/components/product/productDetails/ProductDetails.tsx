import React from 'react';
import { IProduct } from '../../interfaces/product.dao';
import './productDetails.scss';

interface ProductDetailsProps {
  product: IProduct;
  onClose: () => void;
  onAddToCart: (product: IProduct) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onClose, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
    onClose();
  };

  return (
    <div className="product-details-container">
      <h2 className="product-details-title">Детальна інформація про товар</h2>
      <img src={product.image} alt={product.name} className="product-details-image" />
      <p className="product-details-description">Опис: {product.description}</p>
      <p className="product-details-price">Ціна: ${product.price}</p>
      <p className="product-details-color">Колір: {product.color}</p>
      <p className="product-details-size">Розмір: {product.size}</p>

      <div className="product-details-buttons">
        <button className="add-to-cart-button" onClick={handleAddToCart}>Додати до кошика</button>
        <button className="close-button" onClick={onClose}>Закрити</button>
      </div>
    </div>
  );
};

export default ProductDetails;
