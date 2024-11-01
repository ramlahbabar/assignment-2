



import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => (
  <header className={styles.header}>
    <nav>
      <ul className={styles.navList}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;

