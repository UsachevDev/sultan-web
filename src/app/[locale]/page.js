import FeaturedProducts from './components/FeaturedProducts';
import PromoCarousel from './components/PromoCarousel/PromoCarousel';
import CatalogCarousel from './components/CatalogCarousel/CatalogCarousel';
import Banner from "./components/Banner";
import ContactMapSection from './components/ContactMapSection/ContactMapSection';
import CategoriesSection from './components/CategoriesSection/CategoriesSection';

export default function Home() {
  return (
    <>
      <Banner />
      <main className='page-main'>
        <FeaturedProducts />
        <CategoriesSection />
        <PromoCarousel />
        <CatalogCarousel />
        <ContactMapSection />
      </main>
    </>

  );
}
