import React, { useState, ChangeEvent, useMemo } from 'react';
import { Input, Text, Button, Row, Column, List, Image, Icon } from '../../components';
import { ITask } from 'context';
import { useTaskContext } from '../../context';
import { Logo } from '../../assets';

const DEFAULT_SECONDS = 20;
const SECONDS_MINUTES = 60;

type Stage = 'Ready' | 'Time to Work' | 'Paused' | 'Stopped' | 'Done';

export const Home = () => {
  const { taskList, addTask } = useTaskContext();
  const [timer, setTimer] = useState<any>();
  const [taskName, setTaskName] = useState('');
  const [stage, setStage] = useState<Stage>('Ready');
  const [seconds, setSeconds] = useState(DEFAULT_SECONDS);

  const secondsToTimer = (seconds: number) => {
    const minutes = Math.floor(seconds / SECONDS_MINUTES);
    const secondsLeft = seconds % SECONDS_MINUTES;
    return formattedTimer(minutes, secondsLeft);
  };

  const formattedTimer = (minutes: number, seconds: number) => {
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

  const handleStageTimer = useMemo(() => {
    switch (stage) {
      case 'Ready':
        setStage('Ready');
        return 'Ready';
      case 'Time to Work':
        setStage('Time to Work');
        return 'Time to Work';
      case 'Paused':
        setStage('Paused');
        return 'Paused';
      case 'Stopped':
        setStage('Stopped');
        return 'Stopped';
      case 'Done':
        setStage('Done');
        return 'Done';
    }
  }, [stage]);

  const handleStartTimer = () => {
    setStage('Time to Work');
    const timerInterval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(timer);
          setStage('Done');
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    setTimer(timerInterval);
  };

  const handlePauseButton = () => {
    setStage('Paused');
    setTimer((prevTimer: any) => {
      clearInterval(prevTimer);
      return undefined;
    });
  };

  const handleStopButton = () => {
    setStage('Stopped');
    handlePauseButton();
    setSeconds(DEFAULT_SECONDS);
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
            {handleStageTimer}
          </Text>
          <Text color="tertiary" fontWeight="bold" fontSize={80} property="30px">
            {secondsToTimer(seconds)}
          </Text>
          <Button variant="transparent" width="53%" onClick={handleStartTimer}>
            <Text color="tertriary" fontWeight="bold" fontSize={20}>
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
            <Button variant="transparent" width="25%" margin={2} onClick={handleStopButton}>
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
