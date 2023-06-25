import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface ITask {
  name: string;
}

interface ITaskContext {
  taskList: ITask[];
  addTask: (task: ITask) => void;
}

const TaskContext = createContext<ITaskContext | undefined>(undefined);

type TaskProviderProps = {
  children: ReactNode;
};

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const addTask = (task: ITask) => {
    if (task.name === '') return;
    return setTaskList((prevTask) => [...prevTask, task]);
  };

  const value: ITaskContext = {
    taskList,
    addTask,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTaskContext must be used within a TaskProvider');

  return context;
};
