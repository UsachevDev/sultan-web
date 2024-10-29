import styles from './locationEmail.module.css';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const LocationEmail = ({ customStyles = {} }) => {
    const t = useTranslations('Header');
    return (
        <div className={styles.wrapper} style={customStyles}>
            <div className={styles.locationBlock}>
                <svg width="20" height="20" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 9.8335C9.38071 9.8335 10.5 8.71421 10.5 7.3335C10.5 5.95278 9.38071 4.8335 8 4.8335C6.61929 4.8335 5.5 5.95278 5.5 7.3335C5.5 8.71421 6.61929 9.8335 8 9.8335Z" stroke="#3F4E65" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.99992 0.666748C6.23181 0.666748 4.53612 1.36913 3.28587 2.61937C2.03563 3.86961 1.33325 5.5653 1.33325 7.33342C1.33325 8.91008 1.66825 9.94175 2.58325 11.0834L7.99992 17.3334L13.4166 11.0834C14.3316 9.94175 14.6666 8.91008 14.6666 7.33342C14.6666 5.5653 13.9642 3.86961 12.714 2.61937C11.4637 1.36913 9.76803 0.666748 7.99992 0.666748V0.666748Z" stroke="#3F4E65" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className={styles.addressText}>
                    <span>{t('address-1')}</span>
                    <span>{t('address-2')}</span>
                </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.emailBlock}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.37508 3.33325H15.6251C16.3169 3.33321 16.9824 3.59788 17.4853 4.07298C17.9881 4.54808 18.2901 5.19758 18.3293 5.88825L18.3334 6.04158V13.9583C18.3335 14.65 18.0688 15.3156 17.5937 15.8184C17.1186 16.3213 16.4691 16.6233 15.7784 16.6624L15.6251 16.6666H4.37508C3.6833 16.6666 3.01772 16.402 2.51489 15.9269C2.01205 15.4518 1.71008 14.8023 1.67091 14.1116L1.66675 13.9583V6.04158C1.6667 5.3498 1.93138 4.68423 2.40647 4.18139C2.88157 3.67856 3.53108 3.37658 4.22175 3.33742L4.37508 3.33325H15.6251H4.37508ZM17.0834 7.81075L10.2917 11.3858C10.2151 11.4263 10.1308 11.4504 10.0443 11.4565C9.95776 11.4627 9.87091 11.4508 9.78925 11.4216L9.70925 11.3866L2.91675 7.81158V13.9583C2.91676 14.3242 3.05439 14.6768 3.30231 14.9461C3.55024 15.2153 3.89033 15.3815 4.25508 15.4116L4.37508 15.4166H15.6251C15.9912 15.4166 16.3439 15.2788 16.6132 15.0307C16.8824 14.7826 17.0485 14.4423 17.0784 14.0774L17.0834 13.9583V7.81075ZM15.6251 4.58325H4.37508C4.00909 4.58327 3.65648 4.72089 3.38726 4.96882C3.11803 5.21674 2.95186 5.55683 2.92175 5.92159L2.91675 6.04158V6.39908L10.0001 10.1266L17.0834 6.39825V6.04158C17.0834 5.67546 16.9456 5.32274 16.6975 5.0535C16.4494 4.78425 16.1091 4.61817 15.7442 4.58825L15.6251 4.58325Z" fill="#3F4E65"/>
                </svg>

                <div className={styles.emailText}>
                    <Link href="mailto:opt.sultan@mail.ru" className={styles.emailLink}>opt.sultan@mail.ru</Link>
                    <span>{t('email-text')}</span>
                </div>
            </div>
        </div>
    );
};

export default LocationEmail;
