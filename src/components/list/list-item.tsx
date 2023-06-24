import { Column } from '../column';
import { Text } from '../text';

export type ListItemProps = {
  label: string;
};

export const ListItem: React.FC<ListItemProps> = ({ label }) => {
  return (
    <Column>
      <Text>{label}</Text>
    </Column>
  );
};
