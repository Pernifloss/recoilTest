import React from "react";
import { useRecoilState } from "recoil";
import {
  getFilteredExecution,
  executionAtom,
  loadingAtom
} from "../../recoil/execution";
import { IExecution } from "../../interfaces/execution";
import { Table, Tag, Spin } from "antd";
import { selectedExecutionIDAtom } from "../../recoil/executionDetails";

const ExecutionList = () => {
  const [{ data: allExecutions, loading }] = useRecoilState(executionAtom);
  const [, setSelectedID] = useRecoilState(selectedExecutionIDAtom);

  return (
    <Table
      loading={loading}
      onRow={(record, rowIndex) => {
        return {
          onClick: () => {
            record && setSelectedID(record.id);
          }
        };
      }}
      dataSource={allExecutions?.list?.items || []}
      columns={[
        {
          key: "id",
          title: "Id",
          dataIndex: "id"
        },
        {
          key: "date",
          title: "Date",
          dataIndex: "date"
        },
        {
          key: "duration",
          title: "Duration",
          dataIndex: "duration"
        },
        {
          key: "startdate",
          title: "Startdate",
          dataIndex: "startdate"
        },
        {
          key: "primarykey",
          title: "Primarykey",
          dataIndex: "primarykey"
        },
        {
          key: "identifier",
          title: "Identifier",
          dataIndex: "identifier"
        },
        {
          key: "project_name",
          title: "Project_name",
          dataIndex: "project_name"
        },
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
  );
};

export default ExecutionList;
