import React from "react";
import { loadingAtom } from "../recoil/execution";

import { useRecoilState } from "recoil/dist";

import "antd/dist/antd.css";
import { Table, Tag, Tree } from "antd";
import groupByFieldsContainer from "../utils/executionGrouper";

const data = {
  list: {
    items: [
      {
        id: "365",
        date: "2020-07-27T14:18:49,0632Z",
        anonymizefield: "131",
        fieldscontainer: "129",
        sequential: "false",
        count: "100005",
        execsession: "453",
        time: "29439",
        status: "OK"
      },
      {
        id: "366",
        date: "2020-07-27T14:18:49,0633Z",
        anonymizefield: "133",
        fieldscontainer: "129",
        sequential: "false",
        count: "100005",
        execsession: "453",
        time: "29439",
        status: "OK"
      },
      {
        id: "367",
        date: "2020-07-27T14:19:15,0266Z",
        anonymizefield: "134",
        fieldscontainer: "105",
        sequential: "false",
        count: "100005",
        execsession: "453",
        time: "23524",
        status: "OK"
      }
    ],
    total: "3",
    count: "3",
    rank: "0"
  }
};
function App() {
  return (
    <div>
      Tree :
      <Tree treeData={groupByFieldsContainer(data)} />
      Table :
      <Table
        dataSource={groupByFieldsContainer(data)}
        columns={[
          { title: "Fieldscontainer", key: "key", dataIndex: "key" },
          { title: "Execution id", key: "id", dataIndex: "id" },
          {
            key: "status",
            title: "Status",
            dataIndex: "status",
            render: status => (
              <Tag color={status === "OK" ? "green" : "volcano"}>{status} </Tag>
            )
          }
        ]}
      />
    </div>
  );
}

export default App;
