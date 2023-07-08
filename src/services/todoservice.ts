import { ITodo } from "../interfaces";
import { api } from "../providers";

const getAll = async () => await api.get<ITodo[]>('todos')
const create = async (todo: Pick<ITodo, 'task' | 'isDone'>) => await api.post('todos', todo);

export const TodoService = () => {
    return {
        getAll,
        create
    }
}