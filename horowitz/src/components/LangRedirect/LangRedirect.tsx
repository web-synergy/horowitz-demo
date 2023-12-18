import { Navigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

const LangRedirect = () => {
  const {
    i18n: { language },
  } = useTranslation();
  return <Navigate to={`/${language}`} />;
};

export default LangRedirect;
