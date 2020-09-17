import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const NAME = 'Ray';
export const SITE_TITLE = 'Next.js Sample Website';

function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default Layout;
