

export interface IRESTResponse<T> {
    data?: T;
    error?: Error;
    loading: boolean;
}