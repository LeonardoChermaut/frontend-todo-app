export const secondsToTimer = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  return formattedTimer(minutes, secondsLeft);
};

export const formattedTimer = (minutes: number, seconds: number) => {
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

export type Stage = 'Pronto' | 'Executando' | 'Pausado' | 'Parado' | 'Finalizado';

export type TimerState = number | undefined;
