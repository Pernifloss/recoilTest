import { atom, selector } from "recoil/dist";
import { IExecution } from "../interfaces/execution";

/**
 * recoil state containing fetched executions
 */
export const executionAtom = atom<{
  data: any;
  error?: Error;
  loading: boolean;
}>({
  key: "executions",
  default: { data: [], loading: false } // default value (aka initial value)
});

/**
 * recoil state containing fetching state mangas
 */
export const loadingAtom = atom({
  key: "loadingExecution",
  default: "idle" // default value (aka initial value)
});

/**
 * recoil state containing string to filter manga list
 */
export const filter = atom({
  key: "filter",
  default: "" // default value (aka initial value)
});

/**
 * selector to retrieve only manga containing filter string
 */
export const getFilteredExecution = selector<IExecution[]>({
  key: "MySelector",
  get: ({ get }) => {
    const execution = get(executionAtom);
    const filterStr: string = get(filter);
    return execution.data;
  }
});
