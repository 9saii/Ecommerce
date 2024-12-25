// import React, { useState, useEffect } from 'react';
// import productsData from '../data/products.json';

// const Products = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     setProducts(productsData);
//   }, []);

//   return (
//     <div>
//       <h1>Our Products</h1>
//       <div className="product-list">
//         {products.map((product) => (
//           <div key={product.id} className="product">
//             <img src={product.image} alt={product.name} className="product-image" />

//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <p>{product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import productsData from '../data/products.json';

const ProductListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ProductCard = styled.div`
  width: 300px;
  margin: 10px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }

  .product-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 18px;
    margin-bottom: 5px;
  }

  p {
    line-height: 1.5;
    margin-bottom: 10px;
  }

  button {
    display: flex;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin: 0 auto;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #45a049;
    }
  }
`;

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div>
      <h1>Our Products</h1>
      <ProductListWrapper>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />

            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </ProductCard>
        ))}
      </ProductListWrapper>
    </div>
  );
};

export default Products;
