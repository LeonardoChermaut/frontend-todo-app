import React, { useState, ChangeEvent } from 'react';
import { Input, Text, Button, Row, Column, List, Image, Icon } from '../../components';
import { ITask } from 'context';
import { useTaskContext } from '../../context';
import { Logo } from '../../assets';

const DEFAULT_SECONDS = 20;

type Stage = 'ready' | 'running' | 'paused' | 'stopped' | 'done';

export const Home = () => {
  const [taskName, setTaskName] = useState('');
  const { taskList, addTask } = useTaskContext();
  const [seconds, setSeconds] = useState(DEFAULT_SECONDS);
  const [timer, setTimer] = useState<any>();

  const secondsToTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return formatedTime(minutes, secondsLeft);
  };

  const formatedTime = (minutes: number, seconds: number) => {
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const handleInputChange = ({ target: { value: name } }: ChangeEvent<HTMLInputElement>) => {
    setTaskName(name);
  };

  const handleAddTask = () => {
    const newTask: ITask = { name: taskName };
    addTask(newTask);
    setTaskName('');
  };

  const handleStartTimer = () => {
    const timerInterval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(timer);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    setTimer(timerInterval);
  };

  const handlePauseButton = () => {
    setTimer((prevTimer: any) => {
      clearInterval(prevTimer);
      return undefined;
    });
  };

  const listItems = taskList.map((task) => ({ label: task.name }));

  return (
    <React.Fragment>
      <Column width="50%" margin="0 auto">
        <Column
          width="100%"
          display="flex"
          borderRadius={10}
          marginBottom={4}
          marginTop={4}
          textAlign="center"
          bg="rgba(255,255,255,0.2)"
          padding={4}
          alignItems="center">
          <Image src={Logo} width="30%" />
          <Text color="tertiary" fontWeight="bold" fontSize={20}>
            Ready
          </Text>
          <Text color="tertiary" fontWeight="bold" fontSize={80} property="30px">
            {secondsToTime(seconds)}
          </Text>
          <Button variant="transparent" width="53%" onClick={handleStartTimer}>
            <Text color="tertiary" fontWeight="bold" fontSize={20}>
              Iniciar
            </Text>
          </Button>
          <Row>
            <Button variant="transparent" width="25%" margin={2} onClick={handleStartTimer}>
              <Icon variant="play" />
            </Button>
            <Button variant="transparent" width="25%" margin={2} onClick={handlePauseButton}>
              <Icon variant="pause" />
            </Button>
            <Button variant="transparent" width="25%" margin={2}>
              <Icon variant="restart" />
            </Button>
            <Button variant="transparent" width="25%" margin={2}>
              <Icon variant="stop" />
            </Button>
            <Button variant="transparent" width="25%" margin={2}>
              <Icon variant="done" />
            </Button>
          </Row>
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
  );
};
