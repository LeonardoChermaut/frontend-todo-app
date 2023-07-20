import { throwApiException } from "../exception";

export const formatTimestamp = (timestamp: string): string => {
    const date = new Date(timestamp);
    const formattedTimestamp = date.toLocaleString(); 
  
    return formattedTimestamp.toString();
  };

export const handleResponseApi = (response: any) => response;

export const handleErrorApi = (error: any) => {
    if(error) throwApiException(error);
    
    return Promise.reject(error);
};