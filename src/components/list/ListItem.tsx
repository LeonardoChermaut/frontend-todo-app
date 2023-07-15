import { Icon } from '../icon';
import { Column } from '../column';
import { Text } from '../text';
import { Row } from '../row';

export type ListItemProps = {
  index: number;
  id: number;
  task: string;
  isDone?: boolean;
  isActived?: boolean;
  onClick?: (index: number) => void;
};

export const ListItem: React.FC<ListItemProps> = ({ index, id, task, isDone, onClick, isActived }) => {
  return (
    <Column
      width="100%"
      bg="rgb(0,0,0,0.2)"
      p="1rem"
      borderRadius="4px"
      marginBottom="0.9rem"
      cursor="pointer"
      borderLeft="5px"
      borderLeftStyle="solid"
      borderLeftColor={isActived ? '#fff' : 'transparent'}
      onClick={() => onClick && onClick(index)}>
      <Row>
        <Text color="secondary" flex={1}>
          {task}
        </Text>
        {isDone === true && <Icon variant="done-white" width="20px" />}
      </Row>
    </Column>
  );
};
