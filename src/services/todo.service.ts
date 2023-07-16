import { ITodo } from '../interfaces';
import { api } from '../providers';

interface IResponse<T> {
  data: T;
  status: number;
}

const formatTimestamp = (timestamp: string): string => {
    const date = new Date(timestamp);
    const formattedTimestamp = date.toLocaleString(); 
  
    return formattedTimestamp.toString();
  };
  
const throwApiException = <T>({ response: { data } }: any): IResponse<T> => {
    const { statusCode, path, message, timestamp } = data;
    
    throw {
      statusCode,
      path,
      message,
      timestamp: formatTimestamp(timestamp),
    };
};

const getAll = async () => await api.get<ITodo[]>('todos').catch((error) => throwApiException(error));

const create = async (todo: Pick<ITodo, 'task' | 'isDone'>): Promise<IResponse<void>> =>
  await api.post('todos', todo).catch((error) => throwApiException(error));

const update = async (id: number, todo: Pick<ITodo, 'task' | 'isDone'>): Promise<IResponse<void>> =>
  await api.put(`todos/${id}`, todo).catch((error) => throwApiException(error));

const remove = async (id: number): Promise<IResponse<void>> => 
  await api.delete(`todos/${id}`).catch((error) => throwApiException(error));

export const TodoService = () => {
  return {
    getAll,
    create,
    update,
    remove
  };
};
