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
          { id: 5, text: "Cart", url: "/dummy1" },
          { id: 6, text: "Hot Deals", url: "/dummy2" },
        ]}
      />
    </div>
    <MiniCart />
  </div>
);
