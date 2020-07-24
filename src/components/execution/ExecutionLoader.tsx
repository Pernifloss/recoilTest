import React, {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {loadingAtom, executionAtom} from "../../recoil/execution";

const executionSessionUrl = 'http://localhost:5251/data/execsession?pagecount=-1';
const ExecutionLoader = () => {
    const [state, setfetchingState] = useRecoilState(loadingAtom)
    const [, setExecution] = useRecoilState(executionAtom);
    useEffect(() => {
        setfetchingState('loading');
        (async function fetchData() {
            const res = await (await fetch(executionSessionUrl, {
                    method: "GET",
                    headers: {'Authorization': 'Basic ' + Buffer.from("admin:quadra").toString('base64')}
                })).json();
            setExecution(res.data);
            setfetchingState('done');
        })(); 
    }, []
)
    return <div>
        state : {state === 'loading' ? 'loading...' : 'done'}
    </div>
}
export default ExecutionLoader;