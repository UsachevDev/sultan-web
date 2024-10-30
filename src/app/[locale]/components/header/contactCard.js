import styles from './contactCard.module.css';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import img from '../../../../../public/img.png';

const ContactCard = ({ customStyles = {} }) => {
    const t = useTranslations('Header');
    return (
        <div className={styles['contact-wrapper']}>
            <div className={styles.text}>
                <span className={styles['text-phone']}>+7 (777) 490-00-91</span>
                <span className={styles['text-wh']}>{t("workingHours")}</span>
                <a href='tel:+77774900091' className={styles['text-call']}>{t("call")}</a>
            </div>
            <div className={styles.image}>
                <Image src={img} alt="Контактное изображение" />
            </div>
            <div className={styles.ellipse}></div>
        </div>
    );
};

export default ContactCard;
