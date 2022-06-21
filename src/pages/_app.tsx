import { ProviderGroup } from '../containers/state/groupProvider';
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import '../styles/global.css';
import { ThemeProvider } from '@emotion/react';
import { Theme } from '@/src/theme/ThemeProvider';

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
      <Component {...pageProps} />
    </ThemeProvider>
  );
};


export default appWithTranslation(App);
