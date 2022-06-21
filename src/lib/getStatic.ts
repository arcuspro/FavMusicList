import nextI18nextConfig from '@/next-i18next.config';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface ContextModel {
  params: { locale: string };
}

export const getI18nPaths = () =>
  nextI18nextConfig.i18n.locales
    .filter((el) => el !== 'en')
    .map((lng) => ({
      params: {
        locale: lng,
      },
    }));

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths(),
});

export async function getI18nProps(ctx: ContextModel, ns = ['common']) {
  const locale = ctx?.params?.locale;
  let props = {
    ...(await serverSideTranslations(locale, ns)),
  };

  return props;
}

export function makeStaticProps(ns: string[], isDefaultPage?: boolean) {
  return async function getStaticProps(ctx: ContextModel) {
    const context = isDefaultPage
      ? {
          params: {
            locale: 'en',
          },
        }
      : ctx;

    return {
      props: await getI18nProps(context, ns),
    };
  };
}
