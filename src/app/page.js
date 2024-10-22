import CatalogCarousel from "./components/CatalogCarousel/CatalogCarousel";
import PromoCarousel from "./components/PromoCarousel/PromoCarousel";

export default function Home() {
  return (
    <>
      <h1>Главная страница</h1>
      <PromoCarousel/>
      <CatalogCarousel/>
    </>
    
  );
}
