import { useState } from 'react';
import { useRouter } from 'next/router';
import languageDetector from './lngDetector';
import nextI18nextConfig from '@/next-i18next.config';
import { useIsomorphicEffect } from '@/src/hooks';

export const useTranslationRedirect = (to?: string) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const path = to ? to : router.asPath;

  useIsomorphicEffect(() => {
    setLoading(true);
    const detectedLng = languageDetector.detect()!;
    if (!nextI18nextConfig.i18n.locales.find((el) => el === detectedLng))
      return;

    languageDetector.cache!(detectedLng);

    if (detectedLng === 'en') {
      setLoading(false);
      return;
    }

    router.replace('/' + detectedLng + path);
  }, []);

  return { loading: loading };
};
