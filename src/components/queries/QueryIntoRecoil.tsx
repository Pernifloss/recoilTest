import React, { ReactNode, useEffect } from "react";
import { atom, RecoilState, useRecoilState } from "recoil/dist";
import { IRESTResponse } from "../../interfaces/rest";

type qfn = (a: any) => string;

interface IQueryProps {
  resMapper?: (a: any) => any;
  recoilTarget: RecoilState<any>;
  children?: ReactNode;
  queryUrl: string | qfn;
}

interface IQueryPropsTrigger extends IQueryProps {
  onMount?: false;
  recoilTrigger: RecoilState<any>;
}

interface IQueryPropsOnMount extends IQueryProps {
  onMount: true;
  recoilTrigger?: undefined;
}

const dummy = atom({
  key: "dummy",
  default: {} // default value (aka initial value)
});
const QueryIntoRecoil = ({
  children,
  recoilTrigger = dummy,
  queryUrl,
  recoilTarget,
  onMount = false,
  resMapper = (a: any) => a
}: IQueryPropsTrigger | IQueryPropsOnMount) => {
  const [trigger] = useRecoilState(recoilTrigger);
  const [, setTarget] = useRecoilState(recoilTarget);

  useEffect(
    () => {
      if (!!trigger) {
        setTarget({ loading: true, data: undefined, error: undefined });
        (async function fetchData() {
          try {
            let query =
              typeof queryUrl === "function" ? queryUrl(trigger) : queryUrl;
            const res = await (
              await fetch(query, {
                method: "GET"
              })
            ).json();
            setTarget({
              loading: false,
              data: resMapper(res),
              error: undefined
            });
          } catch (e) {
            setTarget({ loading: false, data: undefined, error: e });
          }
        })();
      }
    },
    onMount ? [] : [trigger]
  );
  return <>{children}</>;
};

export default QueryIntoRecoil;
