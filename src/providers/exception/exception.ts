import { IResponse } from "../interface";
import { formatTimestamp } from "../utils";

export const throwApiException = <T>({ response: { data } }: any): IResponse<T> => {
    const { statusCode, path, message, timestamp } = data;
    
    throw {
      statusCode,
      path,
      message,
      timestamp: formatTimestamp(timestamp),
    };
};