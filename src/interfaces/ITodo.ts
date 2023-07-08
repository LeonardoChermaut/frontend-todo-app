export interface ITodo {
    task: string
    isDone?: boolean
  }

export interface ITimer {
    seconds: number;
    minutes: number;
  }

export interface ITaskContext {
    taskList: ITodo[];
    createTodo: (task: ITodo) => void;
    getTasks: () => Promise<void>; 
  }

export interface IImageProps {
    width?: string;
    height?: string;
    alt?: string;
    src?: string;
  }
  
export interface IColors {
    primary: string;
    secondary: string;
    warn: string;
    success: string;
    error: string;
  }
  
export interface IThemes {
    colors: IColors;
  }
  
export interface IThemeProps {
    theme: IThemes;
    children: React.ReactNode;
  }