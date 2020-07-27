import { IRESTResponse } from "./rest";

export interface IExecution {
  id: string;
  date: Date;
  duration: string;
  startdate: Date;
  primarykey: string;
  identifier: string;
  project_name: string;
  status: string;
}

export interface IExecutionDetail {
  id: string;
  newVal: string;
  date: Date;
  duration: string;
  startdate: Date;
  primarykey: string;
  identifier: string;
  project_name: string;
  status: string;
}
