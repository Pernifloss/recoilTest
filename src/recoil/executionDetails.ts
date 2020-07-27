import { atom, selector } from "recoil/dist";
import { IExecution, IExecutionDetail } from "../interfaces/execution";
import { postData } from "../utils/restService";
import { IRESTResponse } from "../interfaces/rest";

export const selectedExecutionIDAtom = atom<string | null>({
  key: "selectedID",
  default: null // default value (aka initial value)
});

export const executionDetailAtom = atom<IRESTResponse<IExecutionDetail>>({
  key: "executionDetailAtom",
  default: {
    data: undefined,
    loading: false
  }
});

export const getSelectedExecution = selector<any>({
  key: "executionDetailSelector",
  get: async ({ get }) => {
    const data: IExecutionDetail = (await postData(
      "execution",
      ""
    )) as IExecutionDetail;
    return { data, loading: false };
  }
});
