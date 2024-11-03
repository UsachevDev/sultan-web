import Footer from './components/Footer/Footer';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import PromoCarousel from './components/PromoCarousel/PromoCarousel';
import CatalogCarousel from './components/CatalogCarousel/CatalogCarousel';
import Banner from './components/Banner/Banner';
import ContactMapSection from './components/ContactMapSection/ContactMapSection';
import Header from './components/header/header';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <main className='page-main'>
        <FeaturedProducts />
        <PromoCarousel />
        <CatalogCarousel />
        <ContactMapSection />
      </main>
      <Footer />
    </>

  );
}
