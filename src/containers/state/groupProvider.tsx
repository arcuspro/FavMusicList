import {  StorageProvider } from '@/src/containers';

const providers = [ StorageProvider];

export const ProviderGroup = ({ children }: any) => {
    const ReducedProviders = providers.reduceRight((children, Provider) => {
        return <Provider>{children}</Provider>;
    }, children);
    return <>{ReducedProviders}</>;
};
