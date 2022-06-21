import { useEffect, useState } from 'react';
import { createContainer } from 'unstated-next';


const StorageContainer = () => {
    const [state, setState] = useState<string>('');
    

    return {
    
    };
};

const useStorageContainer = createContainer(StorageContainer);
export const useStorage = useStorageContainer.useContainer;
export const StorageProvider = useStorageContainer.Provider;
