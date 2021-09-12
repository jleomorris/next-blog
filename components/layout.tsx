import { ReactNode } from 'react';
import styles from '../styles/Layout.module.css';

interface IProps {
  children: ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Layout;
