import { ITodo } from "../interfaces";
import { useCallback, useEffect, useState } from "react";
import { TodoService } from "../services";
import { HTTPS_STATUS } from "../providers/http";

export const useTodo = () => {
    const { getAll , create, update, remove } = TodoService();
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
      alert('Erro ao criar tarefa!');
      throw error      
    }
  }, []);

  const updateTodo = useCallback(async (id: number, todo: Pick<ITodo, 'task' | 'isDone'>) => {
    try {
      const { status } = await update(id, todo);
      if (status === HTTPS_STATUS.CREATED) return alert('Tarefa atualizada com sucesso!');
    } catch (error) {
      alert('Erro ao atualizar tarefa!');
      throw error      
    }
  }, []);

  const removeTodo = useCallback(async (id: number) => {
    try {
      const { status } = await remove(id);
      if (status === HTTPS_STATUS.ACCEPTED) return alert('Tarefa excluída com sucesso!');
    } catch (error) {
      alert('Erro ao excluir tarefa!');
      throw error      
    }
  }, []);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return {
      tasks,
      createTodo,
      getTasks,
      updateTodo,
      removeTodo
    }
};