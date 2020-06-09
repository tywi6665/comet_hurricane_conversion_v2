import React from 'react';
import Container from "./Components/Containers/Container";
import SubContainer from "./Components/Containers/SubContainer";
import DndWrapper from './Components/DndComponents/DndWrapper';
import Modal from "./Components/Modal";
import useModal from "./utils/useModal";
import './App.scss';


function App() {

  const { isShowing, toggle, modalData } = useModal();

  return (
    <Container>
      <SubContainer>
        <h1>
          Aim a Hurricane
        </h1>
      </SubContainer>
      <SubContainer>
        <DndWrapper />
      </SubContainer>
      <SubContainer>
        <button className="button-default directions-button" onClick={e => toggle(e)} data="directions">How to Aim a Hurricane</button>
        <button className="button-default credit-button" onClick={e => toggle(e)} data="credits">Credits</button>
        <Modal
          isShowing={isShowing}
          hide={e => toggle(e)}
          modalData={modalData}
        />
      </SubContainer>
    </Container>
  );
}

export default App;
