import React from 'react';
import { AppContainer } from './styled';
import { Card } from './Card';
import { Column } from './Column';



function App() {
  return (
    <AppContainer>
      <Column text="To do">
        <Card text="Generate app scaffold"></Card>
      </Column>
      <Column text="In Progress">
        <Card text="Learn TypeScript"></Card>
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing"></Card>
      </Column>
    </AppContainer>
  );
}

export default App;
