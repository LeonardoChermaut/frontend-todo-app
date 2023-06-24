import React from 'react';
import { Input, Text, Button, Row, Column } from '../../components';

export const Home = () => {
  return (
    <React.Fragment>
      <Column width="50%" margin="0 auto" marginTop={5}>
        <Column textAlign="center">
          <Text fontWeight="bold" fontSize={40}>
            Tarefas
          </Text>
        </Column>
        <Row width="100%">
          <Input flex={1} placeholder="Adicionar tarefa" />
          <Button>Adicionar</Button>
        </Row>
      </Column>
    </React.Fragment>
  );
};
