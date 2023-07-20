import axios, { AxiosInstance } from 'axios';
import { API_BASE_URL } from './http';
import { IApiInstance } from './interface';
import { handleErrorApi, handleResponseApi } from './utils';

export class ApiInstance implements IApiInstance{
    private api: AxiosInstance;
    private static instance: ApiInstance;

    constructor() {
        this.api = axios.create({ baseURL: API_BASE_URL });
        this.api.interceptors.response.use(handleResponseApi, handleErrorApi);
    }

    public static getInstance(): ApiInstance {
        if (!ApiInstance.instance) {
            return ApiInstance.instance = new ApiInstance();
        }
        return ApiInstance.instance;
    }
    
    public getApi(): AxiosInstance {
        return this.api;
    }
}
