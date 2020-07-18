import React, {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {loadingAtom, mangaAtom} from "../../recoil/manga";


const MangaLoader = () => {
    const [state, setfetchingState] = useRecoilState(loadingAtom)
    const [, setMangas] = useRecoilState(mangaAtom);
    useEffect(() => {
            setfetchingState('loading');
            (async function fetchData() {
                const res = await (await fetch('https://kitsu.io/api/edge/manga', {method: "GET", mode: 'cors'})).json()
                setMangas(res.data)
                setfetchingState('done')
            })();
        }, []
    )
    return <div>
        state : {state === 'loading' ? 'loading...' : 'done'}
    </div>
}
export default MangaLoader;
