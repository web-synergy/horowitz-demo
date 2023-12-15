import { redirect } from 'react-router-dom';
import { localStorageKey } from '../../config/constants';

export const langAction = () => {
  const langFromStorage = localStorage.getItem(localStorageKey);
  const locale = langFromStorage ? langFromStorage : 'ua';
  return redirect(`/${locale}`);
};

const LangRedirect = () => {
  return null;
};

export default LangRedirect;
