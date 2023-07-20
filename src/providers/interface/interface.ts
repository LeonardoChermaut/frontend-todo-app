import { AxiosInstance } from "axios";

export interface IResponse<T> {
    data: T;
    status: number;
}

export interface IApiInstance {
    getApi(): AxiosInstance;
}

