'use client';
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import useNextLocale from '../../core/hooks/useNextLocale';
import { LOCALES } from '../constants.js';
import styles from './localSwitcher.module.scss';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const currentLocale = useLocale();
  const t = useTranslations('LocalSwitcher');
  const getNextLocale = useNextLocale(currentLocale);
  
  const getFlagSvg = (locale) => {
    const flagStyle = isHovered ? { filter: 'brightness(0.9)' } : {};
    if (locale === LOCALES.RU) {

      return (
        <Image src='/icon/header-flag-gb.svg' 
          width={36} 
          height={36} 
          style={flagStyle} 
          alt='british flag'
        />
      );
    }

    return (
      <Image src='/icon/header-flag-ru.svg' 
        width={36} 
        height={36} 
        style={flagStyle} 
        alt='russian flag'
      />
    );
  };

  const onButtonClick = () => {
    const nextLocale = getNextLocale(currentLocale);
    startTransition(() => {
      if (nextLocale === currentLocale) {
        
        return;
      }
      
      const currentUrl = new URL(window.location.href);
      const pathSegments = currentUrl.pathname.split('/');
      pathSegments[1] = nextLocale;
      currentUrl.pathname = pathSegments.join('/');
      router.replace(currentUrl.toString());
    });
  };

  return (
    <button
      onClick={onButtonClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={isPending}
      style={{ background: 'none', border: 'none', padding: 0 }}
      className={styles['locale-switcher']}
    >
      {getFlagSvg(currentLocale)}
      <span className={styles['language-text']}>
        {t('locale')}
      </span>
    </button>
  );
}
