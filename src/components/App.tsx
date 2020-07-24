import React from 'react';
import ExecutionLoader from "./execution/ExecutionLoader";
import ExecutionList from "./execution/ExecutionList";
import ExecutionFilter from "./execution/ExecutionFilter";
import {loadingAtom} from "../recoil/execution";

import {useRecoilState} from "recoil/dist";

function App() {

    const [LoadingState] = useRecoilState(loadingAtom)
    return (
        // <div>
        //     <MangaLoader/>
        //     {LoadingState === 'done' && <MangaFilter/>}
        //     {LoadingState === 'done' && <MangaList/>}
        // </div>

        <div>
            <ExecutionLoader/>
            {LoadingState === 'done' && <ExecutionFilter/>}
            {LoadingState === 'done' && <ExecutionList/>}
        </div>
    );
}

export default App;
