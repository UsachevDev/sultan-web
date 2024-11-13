'use client';
import { useState } from 'react';
import styles from './mobileButton.module.scss';

const MobileButton = ({ customStyle = {}, icon = null, iconClick = null, onClick = null, text = null }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (event) => {
    setIsClicked((prev) => !prev);
    if (onClick) onClick(event);
  };

  const displayedIcon = isClicked && iconClick ? iconClick : icon;

  const content = (
    <div className={styles.circle} style={customStyle}>
      <span className={styles.icon} style={isClicked && iconClick ? { transform: 'rotate(180deg)' } : {}}>
        {displayedIcon}
      </span>
    </div>
  );

  return (
    <button className={styles.button} style={customStyle} onClick={handleClick} title={text}>
      {content}
    </button>
  );
};

export default MobileButton;
