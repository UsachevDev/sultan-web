import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './mobileMenu.module.css';
import MobileButton from './mobileButton';
import Button from '../button';
import handleDownload from '../handleDownload';
import LocalSwitcher from '../local-switcher';
import NavMenu from '../navMenu';

const icon = (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_144_5055)">
    <path d="M6.35314 6.71251L7.05314 6.01251C7.14742 5.9194 7.2667 5.85566 7.39651 5.82904C7.52632 5.80241 7.66106 5.81404 7.78439 5.86251L8.63751 6.20314C8.76214 6.25372 8.869 6.34007 8.94463 6.45129C9.02027 6.56252 9.06128 6.69364 9.06251 6.82814V8.39064C9.06179 8.48213 9.04255 8.57253 9.00597 8.6564C8.96939 8.74026 8.91621 8.81585 8.84964 8.87863C8.78308 8.9414 8.70449 8.99005 8.61863 9.02165C8.53276 9.05325 8.44139 9.06715 8.35001 9.06251C2.37189 8.69064 1.16564 3.62814 0.937511 1.69064C0.926922 1.59549 0.936597 1.49918 0.965901 1.40805C0.995206 1.31691 1.04347 1.23301 1.10753 1.16187C1.17159 1.09073 1.24999 1.03395 1.33756 0.995283C1.42514 0.956614 1.51991 0.936925 1.61564 0.937513H3.12501C3.2597 0.937911 3.39119 0.978596 3.50257 1.05433C3.61395 1.13007 3.70013 1.2374 3.75001 1.36251L4.09064 2.21564C4.14072 2.33847 4.15349 2.47334 4.12737 2.60339C4.10125 2.73344 4.03739 2.85292 3.94376 2.94689L3.24376 3.64689C3.24376 3.64689 3.64689 6.37501 6.35314 6.71251Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_144_5055">
    <rect width="10" height="10" fill="white"/>
    </clipPath>
    </defs>
    </svg>
  );

const icon2 = (
  <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.9583 6.375H11.1249V2.125H6.87492V6.375H4.04159L8.99992 12.0417L13.9583 6.375ZM3.33325 13.4583H14.6666V14.875H3.33325V13.4583Z" fill="white"/>
  </svg>
);

const MobileMenu = ({ onClose }) => {
    const t = useTranslations('Header');
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
        <div className={styles.contactInformation}>
            <div className={styles.locationBlock}>
                    <svg width="20" height="20" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 9.8335C9.38071 9.8335 10.5 8.71421 10.5 7.3335C10.5 5.95278 9.38071 4.8335 8 4.8335C6.61929 4.8335 5.5 5.95278 5.5 7.3335C5.5 8.71421 6.61929 9.8335 8 9.8335Z" stroke="#3F4E65" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.99992 0.666748C6.23181 0.666748 4.53612 1.36913 3.28587 2.61937C2.03563 3.86961 1.33325 5.5653 1.33325 7.33342C1.33325 8.91008 1.66825 9.94175 2.58325 11.0834L7.99992 17.3334L13.4166 11.0834C14.3316 9.94175 14.6666 8.91008 14.6666 7.33342C14.6666 5.5653 13.9642 3.86961 12.714 2.61937C11.4637 1.36913 9.76803 0.666748 7.99992 0.666748V0.666748Z" stroke="#3F4E65" strokeWidth="1.3" strokeWinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className={styles.addressText}>
                        <span>{t('address-1')}</span>
                        <span>{t('address-2')}</span>
                    </div>
            </div>
            <div className={styles.emailBlock}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.37508 3.33325H15.6251C16.3169 3.33321 16.9824 3.59788 17.4853 4.07298C17.9881 4.54808 18.2901 5.19758 18.3293 5.88825L18.3334 6.04158V13.9583C18.3335 14.65 18.0688 15.3156 17.5937 15.8184C17.1186 16.3213 16.4691 16.6233 15.7784 16.6624L15.6251 16.6666H4.37508C3.6833 16.6666 3.01772 16.402 2.51489 15.9269C2.01205 15.4518 1.71008 14.8023 1.67091 14.1116L1.66675 13.9583V6.04158C1.6667 5.3498 1.93138 4.68423 2.40647 4.18139C2.88157 3.67856 3.53108 3.37658 4.22175 3.33742L4.37508 3.33325H15.6251H4.37508ZM17.0834 7.81075L10.2917 11.3858C10.2151 11.4263 10.1308 11.4504 10.0443 11.4565C9.95776 11.4627 9.87091 11.4508 9.78925 11.4216L9.70925 11.3866L2.91675 7.81158V13.9583C2.91676 14.3242 3.05439 14.6768 3.30231 14.9461C3.55024 15.2153 3.89033 15.3815 4.25508 15.4116L4.37508 15.4166H15.6251C15.9912 15.4166 16.3439 15.2788 16.6132 15.0307C16.8824 14.7826 17.0485 14.4423 17.0784 14.0774L17.0834 13.9583V7.81075ZM15.6251 4.58325H4.37508C4.00909 4.58327 3.65648 4.72089 3.38726 4.96882C3.11803 5.21674 2.95186 5.55683 2.92175 5.92159L2.91675 6.04158V6.39908L10.0001 10.1266L17.0834 6.39825V6.04158C17.0834 5.67546 16.9456 5.32274 16.6975 5.0535C16.4494 4.78425 16.1091 4.61817 15.7442 4.58825L15.6251 4.58325Z" fill="#3F4E65"/>
                    </svg>
                    <div className={styles.emailText}>
                        <Link href="mailto:opt.sultan@mail.ru" className={styles.emailLink}>opt.sultan@mail.ru</Link>
                        <span>{t('email-text')}</span>
                    </div>
            </div>

            <div className={styles.phoneBlock}>
                    <div className={styles.phoneBlockInner}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.20194 3.15157L2.22602 3.13652L5.27031 1.63672L8.55612 6.01779L7.0444 8.03354C7.08963 8.79373 7.41201 9.51095 7.9505 10.0494C8.48899 10.5879 9.20622 10.9103 9.96641 10.9555L11.9821 9.4438L16.3632 12.7295L14.8758 15.7484L14.8633 15.7739L14.8482 15.7979C14.7689 15.9258 14.6581 16.0312 14.5264 16.1042C14.3948 16.1772 14.2467 16.2152 14.0961 16.2148H13.3106C11.7971 16.2148 10.2983 15.9166 8.89999 15.3374C7.50165 14.7582 6.23109 13.9092 5.16085 12.839C4.09061 11.7688 3.24165 10.4982 2.66244 9.09985C2.08324 7.70151 1.78512 6.20278 1.78513 4.68923V3.90366C1.78465 3.75315 1.8227 3.60502 1.89566 3.47337C1.96862 3.34172 2.07406 3.23094 2.20194 3.15157ZM2.91013 4.68923C2.91013 10.4241 7.57578 15.0898 13.3106 15.0898H13.9462L14.9414 13.0696L11.9819 10.85L10.3342 12.0857H10.1468C9.02453 12.0844 7.94863 11.6381 7.1551 10.8445C6.36156 10.051 5.91521 8.9751 5.91395 7.85287V7.66538L7.14966 6.01775L4.93031 3.05847L2.91013 4.05378V4.68923Z" fill="#3F4E65"/>
                        </svg>
                        <div className={styles.phoneBlockInnerText1}>
                            <span>{t('salesDep')}</span>
                            <span>+7 (777) 490-00-91</span>
                        </div>
                    </div>
                    <span className={styles.phoneBlockText2}>{t('workingHours')}</span>
                    <Link href="tel:+77774900091" className={styles.phoneBlockReqCall}>
                        <MobileButton icon={icon} customStyle={{width: '30px', height: '30px'}}/>
                        <span>{t("call")}</span>
                    </Link>
            </div>
        </div>

        <div className={styles.devider}></div>

        <div className={styles.menuText}>{t('siteMenu')}</div>
        
        <NavMenu />

        <div className={styles.button2}>
        <Button text={t('button-2')} 
        icon={icon2} 
        customStyle={{width: '290px', height: '70px'}}
        onClick={handleDownload}
        />
        </div>

        <div className={styles.devider}></div>

        <LocalSwitcher/>
      
      </div>
    </div>
  );
};

export default MobileMenu;
