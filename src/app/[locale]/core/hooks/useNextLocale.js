import { LOCALES } from '../../components/constants.js';

const useNextLocale = (currentLocale) => {
  const getNextLocale = () => (currentLocale === LOCALES.RU ? LOCALES.EN : LOCALES.RU);
  
  return getNextLocale;
};

export default useNextLocale;
