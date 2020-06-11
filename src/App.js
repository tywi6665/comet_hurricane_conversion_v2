import React from 'react';
import Container from "./Components/Containers/Container";
import SubContainer from "./Components/Containers/SubContainer";
import DndWrapper from './Components/DndComponents/DndWrapper';
import './App.scss';


function App() {

  return (
    <Container>
      <SubContainer classes="">
        <DndWrapper />
      </SubContainer>
    </Container>
  );
}

export default App;
