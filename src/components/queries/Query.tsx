import React, {ReactElement, ReactNode, useEffect, useState} from 'react';
import {IRESTResponse} from "../../interfaces/rest";

interface IChildrenProps<T> {
    data?: T,
    error?: Error,
    loading?: boolean
}

interface IQueryProps<T> {
    children: (a: IChildrenProps<T>) => ReactElement
    queryUrl: string,
    fetchOpt?: RequestInit
}


function Query<Q extends {}>({
                                 children, queryUrl, fetchOpt
                             }: IQueryProps<Q>) {
    const [{loading, error, data}, setResult] = useState<IRESTResponse<Q>>({loading: false})
    useEffect(() => {

        (async function fetchData() {
            setResult({loading: true, data: undefined, error: undefined});
            try {

                const res = await (await fetch(queryUrl, fetchOpt)).json();

                setResult({loading: false, data: res, error: undefined});
            } catch (e) {

                setResult({loading: false, data: undefined, error: e});
            }
        })();


    },[])
    return children({loading, error, data})
}

export default Query