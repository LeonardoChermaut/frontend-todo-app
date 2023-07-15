import { ITodo } from 'interfaces';
import { Column } from '../column';
import { ListItem } from './ListItem';

type ListProps = {
  items: ITodo[];
  selectedIndex?: number;
  onClick?: (index: number) => void;
};

export const List: React.FC<ListProps> = ({ items, onClick, selectedIndex }) => {
  return (
    <Column>
      {items &&
        items.map((item, index) => (
          <ListItem key={index} {...item} index={index} onClick={onClick} isActived={index === selectedIndex} />
        ))}
    </Column>
  );
};
