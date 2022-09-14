import { useEffect, useState } from 'react';
import { Product } from '../product/product';
import styles from './productList.module.css';

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('/api/products');
      const categoryData = await response.json();
      setProducts(categoryData);
    }
    fetchProducts();
  }, []);
  const renderedProducts = products.map((productDetails) => (
    <Product product={productDetails} key={productDetails.id} />
  ));
  return <div className={styles.container}>{renderedProducts}</div>;
};
