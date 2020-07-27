import React from "react";

import "antd/dist/antd.css";
import ExecutionList from "./execution/ExecutionList";
import ExecutionLoader from "./execution/ExecutionLoader";

function App() {
  return (
    <div>
      <ExecutionList />
      <ExecutionLoader />
    </div>
  );
}

export default App;
