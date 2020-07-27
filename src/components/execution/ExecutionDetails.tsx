import React from "react";
import { useRecoilState } from "recoil";
import { Card, Col, Row, Spin } from "antd";
import { executionDetailAtom } from "../../recoil/executionDetails";

const executionSessionUrl = "http://localhost:3001/execution";
const ExecutionDetails = () => {
  // @ts-ignore
  const [{ loading, data, error }] = useRecoilState(executionDetailAtom);
  return (
    <Spin spinning={loading}>
      <Row>
        <Col span={12}>
          <Card title="Execution Instance ID" bordered={true}>
            Execution Instance propreties :{data?.primarykey}
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Execution Summary" bordered={true}>
            General Summary
          </Card>
        </Col>
        <Col span={24}>
          <Card title="Execution Detail" bordered={true}>
            Execution Instance propreties : {data?.newVal}
          </Card>
        </Col>
      </Row>
    </Spin>
  );
};
export default ExecutionDetails;
