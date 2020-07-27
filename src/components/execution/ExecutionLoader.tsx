import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { loadingAtom, executionAtom } from "../../recoil/execution";
import QueryIntoRecoil from "../queries/QueryIntoRecoil";
import {
  executionDetailAtom,
  selectedExecutionIDAtom
} from "../../recoil/executionDetails";
import ExecutionDetails from "./ExecutionDetails";
import Query from "../queries/Query";
import { IExecution, IExecutionDetail } from "../../interfaces/execution";
import { IRESTResponse } from "../../interfaces/rest";

const executionSessionUrl = "http://localhost:3001/data";
const executionDetail = "http://localhost:3001/detail";

const ExecutionLoader = () => {
  // const [state, setfetchingState] = useRecoilState(loadingAtom)
  // const [, setExecution] = useRecoilState(executionAtom);
  // useEffect(() => {
  //         setfetchingState('loading');
  //         (async function fetchData() {
  //             const res = await (await fetch(executionSessionUrl, {
  //                 method: "GET",
  //                 headers: {'Authorization': 'Basic ' + Buffer.from("admin:quadra").toString('base64')}
  //             })).json();
  //             setExecution(res.list.items.map((i: any) => ({...i, date: new Date(i), starDate: i.startdate})));
  //             setfetchingState('done');
  //         })();
  //     }, []
  // )
  return (
    <div>
      <QueryIntoRecoil
        onMount={true}
        queryUrl={executionSessionUrl}
        recoilTarget={executionAtom}
      />

      <QueryIntoRecoil
        recoilTrigger={selectedExecutionIDAtom}
        queryUrl={triggerValue => executionDetail + "?u=" + triggerValue}
        recoilTarget={executionDetailAtom}
        resMapper={res => ({ newVal: res.id, ...res })}
      >
        <ExecutionDetails />
      </QueryIntoRecoil>
    </div>
  );
};
export default ExecutionLoader;
