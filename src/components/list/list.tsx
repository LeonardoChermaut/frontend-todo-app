import { Column } from '../column';
import { ListItem, ListItemProps } from './list-item';

type ListProps = {
  items: ListItemProps[];
};

export const List: React.FC<ListProps> = ({ items }) => {
  return (
    <Column>
      {items.map((item, index) => (
        <ListItem key={index} {...item} />
      ))}
    </Column>
  );
};
