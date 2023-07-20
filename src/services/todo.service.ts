import { ITodo } from '../interfaces';
import { ApiInstance } from '../providers';
import { IResponse } from '../providers/interface';

type TodoProps = Pick<ITodo, 'task' | 'isDone'>;

type TodoResponse = IResponse<void>;

const api = ApiInstance.getInstance().getApi();

const getAll = async () => {
  return await api.get<ITodo[]>('todos');
}

const remove = async (id: number): Promise<TodoResponse> => {
  return await api.delete(`todos/${id}`);
};

const create = async (todo: TodoProps): Promise<TodoResponse> => {
   return await api.post('todos', todo);
};

const update = async (id: number, todo: TodoProps): Promise<TodoResponse> => {
  return await api.put(`todos/${id}`, todo);
};

export const TodoService = () => {
  return {
    getAll,
    create,
    update,
    remove,
  };
};
