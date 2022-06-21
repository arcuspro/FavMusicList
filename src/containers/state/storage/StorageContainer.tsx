import { useEffect, useState } from 'react';
import { createContainer } from 'unstated-next';


const StorageContainer = () => {
    const [state2, setState2] = useState<string>('');
    

    return {
    state2
    };
};

const useStorageContainer = createContainer(StorageContainer);
export const useStorage = useStorageContainer.useContainer;
export const StorageProvider = useStorageContainer.Provider;
