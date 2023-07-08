import React, { useState, ChangeEvent, useMemo, Fragment, useCallback, useEffect } from 'react';
import { Input, Text, Button, Row, Column, List, Image, Icon } from '../../components';
import { ITask } from 'context';
import { useTaskContext } from '../../context';
import { Logo } from '../../assets';

const DEFAULT_SECONDS = 5;
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

  const switchCaseStage = (stage: Stage) => {
    switch (stage) {
      case 'Ready':
        return 'Ready';
      case 'Time to Work':
        return 'Time to Work';
      case 'Paused':
        return 'Paused';
      case 'Stopped':
        return 'Stopped';
      case 'Done':
        return 'Done';
      default:
        break;
    }
  };

  const handleStageStatus = useMemo(() => {
    return switchCaseStage(stage);
  }, [stage]);

  const clearTimerInterval = () => {
    setTimer((prevTimer: any) => {
      clearInterval(prevTimer);
      return undefined;
    });
  };

  const handleStartTimer = useCallback(() => {
    setStage('Time to Work');
    const timerInterval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(timer);
          setTimer(undefined);
          setStage('Done');
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    setTimer(timerInterval);
  }, [timer]);

  const handlePauseButton = useCallback(() => {
    setStage('Paused');
    clearTimerInterval();
  }, [timer]);

  const handleRestartButton = useCallback(() => {
    setStage('Ready');
    clearTimerInterval();
    setSeconds(DEFAULT_SECONDS);
  }, [timer]);

  const handleStopButton = useCallback(() => {
    setStage('Stopped');
    clearTimerInterval();
    setSeconds(DEFAULT_SECONDS);
  }, [timer]);

  const handleStageButtons = useMemo(() => {
    switch (stage) {
      case 'Ready':
        return (
          <Fragment>
            <Button variant="transparent" width="100%" onClick={handleStartTimer}>
              <Text color="tertriary" fontWeight="bold" fontSize={20}>
                Iniciar
              </Text>
            </Button>
          </Fragment>
        );
      case 'Time to Work':
        return (
          <Fragment>
            <Button variant="transparent" width="100%" margin={2} onClick={handlePauseButton}>
              <Icon variant="play" />
            </Button>
            <Button variant="transparent" width="100%" margin={2} onClick={handlePauseButton}>
              <Icon variant="pause" />
            </Button>
            <Button variant="transparent" width="100%" margin={2} onClick={handleStopButton}>
              <Icon variant="stop" />
            </Button>
          </Fragment>
        );
      case 'Done':
        return (
          <Fragment>
            <Button variant="transparent" width="100%" margin={2} onClick={handleRestartButton}>
              {''}
              <Icon variant="restart" />
            </Button>
            <Button variant="transparent" width="100%" margin={2}>
              {''}
              <Icon variant="done" />
            </Button>
          </Fragment>
        );
      case 'Paused':
        return (
          <Fragment>
            <Button variant="transparent" width="100%" onClick={handleStartTimer}>
              <Text color="tertriary" fontWeight="bold" fontSize={20}>
                Retornar
              </Text>
            </Button>
          </Fragment>
        );
      case 'Stopped':
        return (
          <Fragment>
            <Button variant="transparent" width="100%" onClick={handleStartTimer}>
              <Text color="tertriary" fontWeight="bold" fontSize={20}>
                Iniciar
              </Text>
            </Button>
          </Fragment>
        );
      default:
        return (
          <Fragment>
            <Button variant="transparent" width="100%" onClick={handleStartTimer}>
              <Text color="tertriary" fontWeight="bold" fontSize={20}>
                Iniciar
              </Text>
            </Button>
          </Fragment>
        );
    }
  }, [handlePauseButton, handleStopButton, handleStartTimer, stage]);

  const listItems = taskList.map((task) => ({ label: task.name }));

  useEffect(() => {
    return () => {
      if (timer) return clearTimeout(timer);
    };
  }, [timer]);

  return (
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
          {handleStageStatus}
        </Text>
        <Text color="tertiary" fontWeight="bold" fontSize={80} property="30px">
          {secondsToTimer(seconds)}
        </Text>

        <Row>{handleStageButtons}</Row>
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
  );
};
