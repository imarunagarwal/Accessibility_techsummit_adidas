import { Categories } from '../categories';
import styles from './sidebar.module.css';

export const Sidebar = () => (
  <div className={styles.container}>
    <Categories />
  </div>
);
