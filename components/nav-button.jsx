import React from 'react';
import styles from './nav-button.module.css';
import Button from './button';

const NavButton = ({children}) => {
  return <Button className={styles.button}>{children}</Button>;
};

export default NavButton;
