import styles from "./product.module.css";
import { ReactComponent as CartIcon } from './../miniCart/cart.svg';

export const Product = ({ product }) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>{product.name}</div>
      <img className={styles.image} src={product.imageURL} />
      <p className={styles.description}>{product.description}</p>
      <div className={styles.moreinfo}>
        <p className={styles.price}>MRP Rs.{product.price}</p>
        <div className={styles.buynow}>
          <CartIcon className={styles.icon} />
        </div>
      </div>
    </div>
  );
};
