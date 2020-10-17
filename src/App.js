import React, { useState, useEffect } from 'react';
import { request } from 'graphql-request';

import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { products } = await request(
        'https://api-eu-central-1.graphcms.com/v2/ckewufzipreh401z44gdveemi/master',
        `
          {
            products {
              printfulProductId
              name
            }
          }
        `
      );

      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <header className="">
        Products:
        {products.map(prod => (
          <div>{prod.name}</div>
        ))}
      </header>
    </div>
  );
}

export default App;
