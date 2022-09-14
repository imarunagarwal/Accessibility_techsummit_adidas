import { useEffect, useState } from 'react';
import styles from './categories.module.css';

export const Categories = () => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch('/api/categories');
      const categoryData = await response.json();
      setCategoryList(categoryData);
    }
    fetchCategories();
  }, []);
  const renderedList = categoryList.map((category) => (
    <a
      key={category.id}
      href={`/category/${category.key}`}
      className={styles.link}
    >
      {category.name}
    </a>
  ));
  return <div className={styles.container}>{renderedList}</div>;
};
