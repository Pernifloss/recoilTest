import React from 'react';
import {useRecoilState} from 'recoil';
import {getFilteredExecution, executionAtom} from "../../recoil/execution";
import {IExecution} from "../../interfaces/execution";

const ExecutionList = () => {
    // @ts-ignore
    const [allExecutions,]: [IExecution[]] = useRecoilState(executionAtom);
    // @ts-ignore
    const [filteredExecutions,]: [IExecution[]] = useRecoilState(getFilteredExecution);

    return <div className="App">
        Executions :{allExecutions.length}
        <table>
            <thead>
            <tr>
                <th>Execution Instance</th>
                <th>Project</th>
                <th>Start date</th>
                <th>Duration</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            {filteredExecutions.map((m: IExecution) => <tr key={m.id}>
                <td>{m.attributes.identifier}</td>
                <td>{m.attributes.project_name}</td>
                <td>{m.attributes.date}</td>
                <td>{m.attributes.duration}</td>
                <td>{m.attributes.status}</td>
            </tr>)}
            </tbody>
        </table>
    </div>
}


export default ExecutionList;