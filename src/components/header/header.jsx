import { Logo } from "../logo";
import { MiniCart } from "../miniCart/miniCart";
import { Navigation } from "../navigation/navigation";
import styles from "./header.module.css";

export const Header = () => (
  <div className={styles.container}>
    <Logo />
    <div className={styles.navLinks}>
      <Navigation
        links={[
          { id: 1, text: "Home", url: "/" },
          { id: 2, text: "About", url: "/about" },
          { id: 3, text: "Contact", url: "/contact" },
          { id: 4, text: "Products", url: "/dummy" },
          { id: 5, text: "Cart", url: "/dummy" },
          { id: 6, text: "Hot Deals", url: "/dummy" },
        ]}
      />
      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>Dropdown</button>
        <div className={styles.dropdownContent}>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
    <MiniCart />
  </div>
);
