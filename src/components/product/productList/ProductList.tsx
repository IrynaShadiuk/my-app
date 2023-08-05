import React, { useState } from 'react';
import { IProduct } from '../../interfaces/product.dao';
import './productList.scss';

interface ProductListProps {
  products: IProduct[];
  onProductSelect: (product: IProduct) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onProductSelect }) => {
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  const handleProductSelect = (product: IProduct) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="product-grid">
    
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <div className="product-content">
      
            <h3 className="product-title">Назва: {product.name}</h3>
            <p className="product-description">Опис: {product.description}</p>
            <p className="product-price">Ціна: ${product.price}</p>
            <button onClick={() => onProductSelect(product)}>Детальніше</button>
          </div>
        </div>
      ))}

      {selectedProduct && (
        <div className="modal">
          <h3 className="product-title">Назва: {selectedProduct.name}</h3>
          <p className="product-description">Опис: {selectedProduct.description}</p>
          <p className="product-price">Ціна: ${selectedProduct.price}</p>

          <button onClick={handleCloseDetails}>Закрити</button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
