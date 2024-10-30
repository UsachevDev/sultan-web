'use client';
import { useState } from 'react';
import { Link } from '@/i18n/routing';
import styles from './mobileButton.module.css';

const MobileButton = ({ customStyle = {}, icon = null, iconClick = null, onClick = null, href = null, isClick = null}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (event) => {
    if (isClick === null) {
      setIsClicked(!isClicked);};
    if (onClick) onClick(event);
  };

  const isOpen = isClick !== null ? isClick : isClicked;

  const content = (
    <div className={styles.circle} style={customStyle}>
      <span className={`${styles.icon} ${isOpen && iconClick ? styles.iconClicked : ''}`}>
        {isOpen && iconClick ? iconClick : icon}
      </span>
    </div>
  );

  return href ? (
    <Link href={href} className={styles.button} style={customStyle} onClick={handleClick}>
      {content}
    </Link>
  ) : (
    <button className={styles.button} style={customStyle} onClick={handleClick}>
      {content}
    </button>
  );
};

export default MobileButton;
