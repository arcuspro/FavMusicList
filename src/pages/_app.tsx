import { ProviderGroup } from '../containers/state/groupProvider';
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import '../styles/global.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Theme } from '@/src/styles/ThemeProvider';

const App = (props: AppProps) => {

  const router = useRouter();

  // useEffect(() => {
  //   const handleRouteChange = (url: URL) => {
  //     gtag.pageview(url);
  //   };

  //   router.events.on('routeChangeComplete', handleRouteChange);
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange);
  //   };
  // }, [router.events]);

  return (
    <ProviderGroup>
      <Theme.Provider>
        <ThemedApp {...props} />
      </Theme.Provider>
    </ProviderGroup>
  );
};

const ThemedApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={Theme.useContainer().theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};


export default appWithTranslation(App);
