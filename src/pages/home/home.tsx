import React, { useState, ChangeEvent } from 'react';
import { Input, Text, Button, Row, Column, List, Image } from '../../components';
import { ITask } from 'context';
import { TaskProvider, useTaskContext } from '../../context';
import Logo from '../../assets/logo.png';

export const Home = () => {
  const [taskName, setTaskName] = useState('');
  const { taskList, addTask } = useTaskContext();

  const handleInputChange = ({ target: { value: name } }: ChangeEvent<HTMLInputElement>) => {
    setTaskName(name);
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
        <Column width="50%" margin="0 auto">
          <Image src={Logo} width="50%" style={{ margin: '0 auto' }} />
          <Column
            width="100%"
            minHeight="300px"
            borderRadius={10}
            marginBottom={4}
            textAlign="center"
            alignItems="center">
            <Button variant="transparent" width="48%">
              <Text color="tertiary" fontWeight="bold" fontSize={20}>
                Iniciar
              </Text>
            </Button>
          </Column>
          <Column textAlign="center">
            <Text color="secondary" fontWeight="bold" fontSize={40}>
              Tarefas
            </Text>
          </Column>
          <Row width="100%">
            <Input flex={1} placeholder="Adicionar tarefa" value={taskName} onChange={handleInputChange} />
            <Button onClick={handleAddTask}>
              <Text color="secondary" fontWeight="bold" fontSize={1}>
                Adicionar
              </Text>
            </Button>
          </Row>
          <List items={listItems} />
        </Column>
      </React.Fragment>
    </TaskProvider>
  );
};
