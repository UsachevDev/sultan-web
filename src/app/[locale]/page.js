
import {useTranslations} from 'next-intl';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <>
        <h1>{t('title')}</h1>
        <FeaturedProducts />
    </>

  );
}
