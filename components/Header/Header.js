import Link from 'next/link';

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.info}>
        <h1 className={styles.name}>{' Linkdienst '}</h1>
      </div>
      <Link href="/">
        <a>
          <img
            className={styles.avatar}
            alt="Stefan Kühnel"
            width="50"
            height="50"
            src="https://assets-cdn.stefankuehnel.com/images/modules/site/favicon/mask-icon.svg"></img>
        </a>
      </Link>
    </header>
  );
}
