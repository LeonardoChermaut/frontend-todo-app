import { ITodo } from "../interfaces";
import { useCallback, useEffect, useState } from "react";
import { TodoService } from "../services";
import { HTTPS_STATUS } from "../providers/http";

export const useTodo = () => {
    const { getAll , create } = TodoService();
    const [tasks, setTasks] = useState<ITodo[]>([]);

    const getTasks = useCallback(async () => {
    try {
      const { status, data: tasks } = await getAll();
      if (status === HTTPS_STATUS.OK) return setTasks(tasks as ITodo[]);
    } catch (error) {
      throw error;
    }
  }, []);

  const createTodo = useCallback(async (todo: Pick<ITodo, 'task' | 'isDone'>) => {
    try {
      const { status } = await create(todo);
      if (status === HTTPS_STATUS.CREATED) return alert('Tarefa criada com sucesso!');
    } catch (error) {
      throw error      
    }
  }, []);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return {
      tasks,
      createTodo,
      getTasks
    }
};