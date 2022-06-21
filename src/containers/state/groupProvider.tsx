import { FormProvider, StorageProvider } from '@/src/containers';

const providers = [FormProvider, StorageProvider];

export const ProviderGroup = ({ children }: any) => {
    const ReducedProviders = providers.reduceRight((children, Provider) => {
        return <Provider>{children}</Provider>;
    }, children);
    return <>{ReducedProviders}</>;
};
