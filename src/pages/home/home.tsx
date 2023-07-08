import React, { useState, ChangeEvent, useEffect, useCallback } from 'react';
import { Input, Text, Button, Row, Column, List, Image, Icon } from '../../components';
import { ITask } from 'context';
import { useTaskContext } from '../../context';
import { Logo } from '../../assets';

interface ITimer {
  seconds: number;
  minutes: number;
}

type Stage = 'Pronto' | 'Executando' | 'Pausado' | 'Parado' | 'Finalizado';

export const Home = () => {
  const { taskList, addTask } = useTaskContext();
  const [stage, setStage] = useState<Stage>('Pronto');
  const [timer, setTimer] = useState<number | undefined>(undefined);
  const [taskName, setTaskName] = useState<string>('');
  const [timerValue, setTimerValue] = useState<ITimer>({ minutes: 0, seconds: 5 });

  const secondsToTimer = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return formattedTimer(minutes, secondsLeft);
  };

  const formattedTimer = (minutes: number, seconds: number) => {
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  };

  const handleAddTask = () => {
    const newTask: ITask = { name: taskName };
    addTask(newTask);
    setTaskName('');
  };

  const handleStageButtons = useCallback(() => {
    switch (stage) {
      case 'Pronto':
        return (
          <Button variant="transparent" width="100%" onClick={handleStartTimer}>
            <Text color="tertriary" fontWeight="bold" fontSize={20}>
              Iniciar
            </Text>
          </Button>
        );
      case 'Executando':
        return (
          <>
            <Button variant="transparent" width="100%" margin={2} onClick={handlePauseButton}>
              <Icon variant="play" />
            </Button>
            <Button variant="transparent" width="100%" margin={2} onClick={handlePauseButton}>
              <Icon variant="pause" />
            </Button>
            <Button variant="transparent" width="100%" margin={2} onClick={handleStopButton}>
              <Icon variant="stop" />
            </Button>
          </>
        );
      case 'Finalizado':
        return (
          <>
            <Button variant="transparent" width="100%" margin={2} onClick={handleRestartButton}>
              <Icon variant="restart" />
            </Button>
            <Button variant="transparent" width="100%" margin={2}>
              <Icon variant="done" />
            </Button>
          </>
        );
      case 'Pausado':
        return (
          <Button variant="transparent" width="100%" onClick={handleStartTimer}>
            <Text color="tertriary" fontWeight="bold" fontSize={20}>
              Retornar
            </Text>
          </Button>
        );
      case 'Parado':
        return (
          <Button variant="transparent" width="100%" onClick={handleStartTimer}>
            <Text color="tertriary" fontWeight="bold" fontSize={20}>
              Iniciar
            </Text>
          </Button>
        );
      default:
        return (
          <Button variant="transparent" width="100%" onClick={handleStartTimer}>
            <Text color="tertriary" fontWeight="bold" fontSize={20}>
              Iniciar
            </Text>
          </Button>
        );
    }
  }, [stage]);

  useEffect(() => {
    if (timerValue.seconds === 0) {
      clearInterval(timer);
      setTimer(undefined);
      setStage('Finalizado');
    }
  }, [timer, timerValue.seconds]);

  const handleStartTimer = useCallback(() => {
    setStage('Executando');
    const timerInterval = setInterval(() => {
      setTimerValue((prevTimerValue) => {
        if (prevTimerValue.seconds === 0) {
          return { minutes: 0, seconds: 0 };
        }
        return { minutes: prevTimerValue.minutes, seconds: prevTimerValue.seconds - 1 };
      });
    }, 1000);

    setTimer(timerInterval);
  }, []);

  const handlePauseButton = useCallback(() => {
    setStage('Pausado');
    clearInterval(timer);
    setTimer(undefined);
  }, [timer]);

  const handleRestartButton = useCallback(() => {
    setStage('Pronto');
    clearInterval(timer);
    setTimer(undefined);
    setTimerValue({ minutes: 0, seconds: 5 });
  }, [timer]);

  const handleStopButton = useCallback(() => {
    setStage('Parado');
    clearInterval(timer);
    setTimer(undefined);
    setTimerValue({ minutes: 0, seconds: 5 });
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
        <Text color="tertiary" fontWeight="bold" fontSize={20} marginBottom="10%">
          {stage}
        </Text>
        <Text color="tertiary" fontWeight="bold" fontSize={80} property="30px">
          {secondsToTimer(timerValue.seconds)}
        </Text>

        <Row>{handleStageButtons()}</Row>
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
      <List items={taskList.map((task) => ({ label: task.name }))} />
    </Column>
  );
};
