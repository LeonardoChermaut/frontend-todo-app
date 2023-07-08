import { useState, ChangeEvent, useEffect, useCallback, useMemo } from 'react';
import { Input, Text, Button, Row, Column, List, Image, Icon } from '../../components';
import { Logo } from '../../assets';
import { useTaskContext } from '../../context';
import { ITimer, ITodo } from '../../interfaces';

const secondsToTimer = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  return formattedTimer(minutes, secondsLeft);
};

const formattedTimer = (minutes: number, seconds: number) => {
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

type Stage = 'Pronto' | 'Executando' | 'Pausado' | 'Parado' | 'Finalizado';

const DEFAULT_TIMER_VALUE = { minutes: 0, seconds: 5 };

export const Home = () => {
  const { taskList, createTodo, getTasks } = useTaskContext();
  const [stage, setStage] = useState<Stage>('Pronto');
  const [timer, setTimer] = useState<number | undefined>(undefined);
  const [taskName, setTaskName] = useState<string>('');
  const [timerValue, setTimerValue] = useState<ITimer>(DEFAULT_TIMER_VALUE);

  const handleInputChange = ({ target: { value: name } }: ChangeEvent<HTMLInputElement>) => {
    setTaskName(name);
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
            <Button variant="transparent" width="100%" margin={2} onClick={handleStopButton}>
              <Icon variant="play" />
              <br /> Parar
            </Button>
            <Button variant="transparent" width="100%" margin={2} onClick={handlePauseButton}>
              <Icon variant="pause" />
              <br /> Pausar
            </Button>
            <Button variant="transparent" width="100%" margin={2} onClick={handleStopButton}>
              <Icon variant="stop" />
              <br /> Finalizar
            </Button>
          </>
        );
      case 'Finalizado':
        return (
          <>
            <Button variant="transparent" width="100%" margin={2} onClick={handleRestartButton}>
              <Icon variant="restart" />
              <br />
              Reiniciar
            </Button>
            <Button variant="transparent" width="100%" margin={2}>
              <Icon variant="done" />
              <br /> Finalizar
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

  const handleAddTask = useCallback(async () => {
    await createTodo({
      task: taskName,
      isDone: false,
    });
    await getTasks();
    setTaskName('');
  }, [createTodo, getTasks, taskName]);

  const handleStartTimer = useCallback(() => {
    setStage('Executando');
    const timerInterval = setInterval(() => {
      setTimerValue(({ minutes, seconds }) => {
        if (seconds === 0) return DEFAULT_TIMER_VALUE;
        return { minutes: minutes, seconds: seconds - 1 };
      });
    }, 1000);

    setTimer(timerInterval);
  }, [setTimerValue]);

  const handlePauseButton = useCallback(() => {
    setStage('Pausado');
    clearInterval(timer);
    setTimer(undefined);
  }, [timer]);

  const handleRestartButton = useCallback(() => {
    setStage('Pronto');
    clearInterval(timer);
    setTimer(undefined);
    setTimerValue(DEFAULT_TIMER_VALUE);
  }, [timer]);

  const handleStopButton = useCallback(() => {
    setStage('Parado');
    clearInterval(timer);
    setTimer(undefined);
    setTimerValue(DEFAULT_TIMER_VALUE);
  }, [timer]);

  const listItems = useMemo(
    () =>
      taskList.map((task: ITodo, index: number) => ({
        id: index,
        task: task.task,
        isDone: task.isDone || false,
      })),
    [taskList],
  );

  useEffect(() => {
    if (timerValue.seconds === 0) {
      clearInterval(timer);
      setTimer(undefined);
      setStage('Finalizado');
    }
  }, [timer, timerValue.seconds]);

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
        <Text color="tertiary" fontWeight="bold" fontSize={20} marginBottom="2%">
          {stage}
        </Text>
        <Text color="tertiary" fontWeight="bold" fontSize={80} property="30px">
          {secondsToTimer(timerValue.seconds)}
        </Text>

        <Row>{handleStageButtons()}</Row>
      </Column>
      <Column textAlign="left">
        <Text color="secondary" fontWeight="bold" fontSize={20} marginBottom={1} marginLeft={2}>
          Tarefas
        </Text>
      </Column>
      <Row width="100%" marginBottom={2}>
        <Input flex={1} placeholder="Digite aqui sua tarefa" value={taskName} onChange={handleInputChange} />
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
