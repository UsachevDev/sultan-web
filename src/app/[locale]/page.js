
import {useTranslations} from 'next-intl';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <>
        <h1>{t('title')}</h1>
        <main className="page-main">
                <p>Просто тестовый контент</p>
                <div>
                    <p>Просто еще один тестовый контент</p>
                    <p>Просто еще один тестовый контент</p>
                </div>
                <p>Просто тестовый контент</p>
                <div>
                    <p>Просто еще один тестовый контент</p>
                    <p>Просто еще один тестовый контент</p>
                </div>
                <p>Просто тестовый контент</p>
                <div>
                    <p>Просто еще один тестовый контент</p>
                    <p>Просто еще один тестовый контент</p>
                    <ContactMapSection></ContactMapSection>
                </div>
            </main>
            <Footer></Footer>
    </>

  );
}
