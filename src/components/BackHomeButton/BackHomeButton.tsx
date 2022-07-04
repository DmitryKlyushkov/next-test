import Link from "next/link";

import styles from "./BackHomeButton.module.css";

const BackHomeButton = () => {
  return (
    <div className={styles.link}>
      <Link href="/">
        <a className={styles.a}>Home page</a>
      </Link>
    </div>
  );
};

export default BackHomeButton;
