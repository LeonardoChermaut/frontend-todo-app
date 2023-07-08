import { createContext, useContext, ReactNode, useMemo } from 'react';
import { ITaskContext } from '../interfaces';
import { useTodo } from '../hook';

const TaskContext = createContext<ITaskContext | undefined>(undefined);

type TaskProviderProps = {
  children: ReactNode;
};

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const { getTasks, createTodo, tasks } = useTodo();

  const value: ITaskContext = {
    taskList: tasks,
    createTodo,
    getTasks,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('Context must be used within a TaskProvider');

  return context;
};
