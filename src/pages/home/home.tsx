import React, { useState, ChangeEvent } from 'react';
import { Input, Text, Button, Row, Column, List } from '../../components';
import { ITask } from 'context';
import { TaskProvider, useTaskContext } from '../../context';

export const Home = () => {
  const [taskName, setTaskName] = useState('');
  const { taskList, addTask } = useTaskContext();

  const handleInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setTaskName(value);
  };

  const handleAddTask = () => {
    const newTask: ITask = { name: taskName };
    addTask(newTask);
    setTaskName('');
  };

  const listItems = taskList.map((task) => ({ label: task.name }));

  return (
    <TaskProvider>
      <React.Fragment>
        <Column width="50%" margin="0 auto" marginTop={5}>
          <Column textAlign="center">
            <Text fontWeight="bold" fontSize={40}>
              Tarefas
            </Text>
          </Column>
          <Row width="100%">
            <Input flex={1} placeholder="Adicionar tarefa" value={taskName} onChange={handleInputChange} />
            <Button onClick={handleAddTask}>Adicionar</Button>
          </Row>
          <List items={listItems} />
        </Column>
      </React.Fragment>
    </TaskProvider>
  );
};
