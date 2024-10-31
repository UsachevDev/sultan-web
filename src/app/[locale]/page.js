
import {useTranslations} from 'next-intl';
import Footer from './components/Footer/Footer';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import PromoCarousel from './components/PromoCarousel/PromoCarousel';
import CatalogCarousel from './components/CatalogCarousel/CatalogCarousel';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <>
        <h1>{t('title')}</h1>
        <main className="page-main">
               <FeaturedProducts />
               <PromoCarousel />
               <CatalogCarousel />
        </main>
        <Footer></Footer>
    </>

  );
}
