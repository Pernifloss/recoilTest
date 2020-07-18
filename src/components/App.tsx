import React from 'react';
import MangaLoader from "./manga/MangaLoader";
import MangaList from "./manga/MangaList";
import MangaFilter from "./manga/MangaFilter";
import {loadingAtom} from "../recoil/manga";
import {useRecoilState} from "recoil/dist";

function App() {

    const [LoadingState] = useRecoilState(loadingAtom)
    return (
        <div>
            <MangaLoader/>
            {LoadingState === 'done' && <MangaFilter/>}
            {LoadingState === 'done' && <MangaList/>}

        </div>
    );
}

export default App;
