'use client';
import {Link} from '@/i18n/routing';
import styles from './button.module.css';

const Button = ({ children, style = {}, icon = null, onClick = null, href = null }) => {
  const content = (
    <div className={styles.button} style={style}>
      <span>{children}</span>
      {icon && <span className={styles['button-icon']}>{icon}</span>}
    </div>
  );

  return href ? (
    <Link href={href} style={{textDecoration: 'none'}}>
      {content}
    </Link>
  ) : (
    <button onClick={onClick} style={{textDecoration: 'none'}}>
      {content}
    </button>
  );
};

export default Button;
