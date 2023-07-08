import { ITodo } from "../interfaces";
import { useCallback, useEffect, useState } from "react";
import { TodoService } from "../services";

export const useTodo = () => {
    const { getAll , create } = TodoService();
    const [tasks, setTasks] = useState<ITodo[]>([]);

    const getTasks = useCallback(async () => {
    try {
      const { status, data: tasks } = await getAll();
      if (status !== 200) throw new Error('Error on get tasks');

      return setTasks(tasks);
    } catch (error) {
      const { message } = error as any;
      throw new Error('Error request message API: ' + message);
    }
  }, []);

  const createTodo = useCallback(async (todo: Pick<ITodo, 'task' | 'isDone'>) => {
    const { status } = await create(todo);
    if (status !== 201) throw new Error('Error on create task');
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