import { ProductList } from "../productList/productList";
import styles from "./main.module.css";
export const Main = () => (
  <div id="mainContainer" className={styles.container}>
    <ProductList />
  </div>
);
