import { ProviderGroup } from '@/src/containers';
import { AppProps } from 'next/app';
import '../styles/global.css';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <ProviderGroup>
                <Component {...pageProps} />
            </ProviderGroup>
        </>
    )
};

export default App;
