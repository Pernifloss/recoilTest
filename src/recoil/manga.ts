import {atom, selector} from "recoil/dist";
import {IManga} from "../interfaces/manga";

/**
 * recoil state containing fetched mangas
 */
export const mangaAtom = atom({
    key: 'mangas',
    default: [], // default value (aka initial value)
});


/**
 * recoil state containing fetching state mangas
 */
export const loadingAtom = atom({
    key: 'loadingManga',
    default: 'idle', // default value (aka initial value)
});

/**
 * recoil state containing string to filter manga list
 */
export const filter = atom({
    key: 'filter',
    default: '', // default value (aka initial value)
});

/**
 * selector to retrieve only manga containing filter string
 */
export const getFilteredManga = selector<IManga[]>({
    key: 'MySelector',
    get: ({get}) => {
        const manga: IManga[] = get(mangaAtom);
        const filterStr: string = get(filter);
        return manga.filter((m: any) => m.attributes.canonicalTitle.includes(filterStr))
    },
});