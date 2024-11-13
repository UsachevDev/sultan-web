'use client';
import styles from './button.module.scss';

const Button = ({ text, customStyle = {}, icon = null, onClick = null, customClassStyle = ''}) => {
  const content = (
    <div className={`${styles.button} ${customClassStyle}`} style={customStyle}>
      <span>{text}</span>
      {icon && <span className={styles['button-icon']}>{icon}</span>}
    </div>
  );

  return (
    <button onClick={onClick} className={styles['button-wrapper']}>
      {content}
    </button>
  );
};

export default Button;
