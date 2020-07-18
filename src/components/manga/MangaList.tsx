import React from 'react';
import {useRecoilState} from 'recoil';
import {getFilteredManga, mangaAtom} from "../../recoil/manga";
import {IManga} from "../../interfaces/manga";

const MangaList = () => {
    // @ts-ignore
    const [allManga,]: [IManga[]] = useRecoilState(mangaAtom);
    // @ts-ignore
    const [filteredManga,]: [IManga[]] = useRecoilState(getFilteredManga);

    return <div className="App">
        Manga récupérés :{allManga.length}
        <table>
            <thead>
            <tr>
                <th>Nom</th>
                <th>Image</th>
            </tr>
            </thead>
            <tbody>
            {filteredManga.map((m: IManga) => <tr key={m.id}>
                <td>{m.attributes.canonicalTitle}</td>
                <td><img alt="poster" src={m.attributes.posterImage.tiny} height={70}/></td>
            </tr>)}
            </tbody>
        </table>
    </div>
}


export default MangaList;
