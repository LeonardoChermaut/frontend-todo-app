import { Column } from '../column';
import { Text } from '../text';

export type ListItemProps = {
  id: number;
  task: string;
  isDone?: boolean;
};

export const ListItem: React.FC<ListItemProps> = ({ id, task, isDone }) => {
  return (
    <Column
      width="100%"
      bg="rgb(0,0,0,0.2)"
      p="1rem"
      borderRadius="4px"
      marginBottom="0.9rem"
      borderLeft="5px solid #fff">
      <Text color="secondary">{task}</Text>
    </Column>
  );
};
