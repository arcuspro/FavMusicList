import { AlbumListType } from '@/src/types/type';
import { compareValues } from '@/src/utils';
import { useEffect, useState } from 'react';
import { createContainer } from 'unstated-next';


const storageKey: string = "storageList"

const StorageContainer = () => {
    const [albumListData, setAlbumListData] = useState<AlbumListType[]>([]);

    const saveStorage = (object: object) => {
        localStorage.setItem(storageKey, JSON.stringify(object))
    }

    const getStorage = () => {
        if (window) {
            const storage = localStorage.getItem(storageKey)
            if (storage) {
                setAlbumListData(JSON.parse(storage))
            } 
        }
    }

    const addToList = (response: AlbumListType) => {
        setAlbumListData((prevState) => [...prevState, response])
        saveStorage([...albumListData, response])
    }

    const removeElement = (id: string) => {
        setAlbumListData((list) => list.filter((element) => element.id !== id))
        saveStorage(albumListData.filter((element) => element.id !== id))
    }

    const handleFavorite = (id: string) => {
        let updatedList = albumListData.map((element) => {
            if (element.id === id) {
                return { ...element, isFavorite: !element.isFavorite }
            }
            return element
        })
        setAlbumListData(updatedList)
        saveStorage(updatedList)
    }

    const sortByKey = (key: string, sortType: 'asc' | 'desc') => {
        setAlbumListData((v)=> [...v].sort(compareValues(key, sortType)))
    }

    const sortByNameAscending = () => {
        sortByKey('albumName', 'asc')
    }

    const sortByNameDescending = () => {
        sortByKey('albumName', 'desc')
    }

    const sortByIdAscending = () => {
        sortByKey('id', 'asc')
    }

    const sortByIdDescending = () => {
        sortByKey('id', 'desc')
    }

    const sortByDateAscending = () => {
        sortByKey('createDate', 'asc')
    }

    const sortByDateDescending = () => {
        sortByKey('createDate', 'desc')
    }

    const sortByIsBest = () => {
        sortByKey('isFavorite', 'desc')
    }

    const sortByIsNotBest = () => {
        sortByKey('isFavorite', 'asc')
    }


    useEffect(() => {
        getStorage()
    }, [])

    return {
        albumListData,
        setAlbumListData,
        removeElement,
        handleFavorite,
        sortByKey,
        addToList,
        getStorage,
        sortByNameAscending,
        sortByNameDescending,
        sortByIdAscending,
        sortByIdDescending,
        sortByDateAscending,
        sortByDateDescending,
        sortByIsBest,
        sortByIsNotBest
    };
};

const useStorageContainer = createContainer(StorageContainer);
export const useStorage = useStorageContainer.useContainer;
export const StorageProvider = useStorageContainer.Provider;
