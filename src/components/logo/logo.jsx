import styles from './logo.module.css';

export const Logo = () => (
  <div className={styles.container}>
    <a href="/">
      <img
        className={styles.image}
        src={`/static/images/logo.png`}
        srcSet="/images/logo.png, /images/logo_2x.png 2x"
      />
    </a>
  </div>
);
