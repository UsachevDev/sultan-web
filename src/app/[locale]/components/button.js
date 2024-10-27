'use client';
import {Link} from '@/i18n/routing';
import styles from './button.module.css';

const Button = ({ text, customStyle = {}, icon = null, onClick = null, href = null }) => {
  const content = (
    <div className={styles.button} style={customStyle}>
      <span>{text}</span>
      {icon && <span className={styles['button-icon']}>{icon}</span>}
    </div>
  );

  return href ? (
    <Link href={href} className={styles['button-wrapper']}>
      {content}
    </Link>
  ) : (
    <button onClick={onClick} className={styles['button-wrapper']}>
      {content}
    </button>
  );
};

export default Button;
