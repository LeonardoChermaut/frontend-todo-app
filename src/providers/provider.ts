import axios, { AxiosInstance } from 'axios';
import { API_BASE_URL } from './http';

export const api: AxiosInstance = axios.create({ baseURL: API_BASE_URL });
