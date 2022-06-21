import { ProviderGroup } from '../containers/state/groupProvider';
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import '../styles/global.css';
import { Theme } from '@/src/theme/ThemeProvider';
import { Layout } from '@/src/layouts';
import { ThemeProvider } from '@emotion/react';

const App = (props: AppProps) => {


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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};


export default appWithTranslation(App);
