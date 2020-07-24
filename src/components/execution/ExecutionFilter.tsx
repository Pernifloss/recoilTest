import React from 'react';
import {useRecoilState} from 'recoil';
import {filter} from "../../recoil/execution";

const ExecutionFilter = () => {
    const [filterStr, setFilter] = useRecoilState(filter);

    return <div>
        <input type="text" value={filterStr} onChange={({target: {value}}) => setFilter(String(value))}/>
    </div>
}


export default ExecutionFilter;