import React from 'react';
import Container from "./Components/Containers/Container";
import SubContainer from "./Components/Containers/SubContainer";
import Modal from "./Components/Modal";
import useModal from "./utils/useModal";
import './App.scss';

function App() {

  const { isShowing, toggle } = useModal();

  return (
    <Container>
      <SubContainer>
        <h1>
          Aim a Hurricane
        </h1>
      </SubContainer>
      <SubContainer>
        Stuff
      </SubContainer>
      <SubContainer>
        <button className="button-default directions-button" onClick={toggle}>How to Aim a Hurricane</button>
        <Modal
          isShowing={isShowing}
          hide={toggle}
        />
        <button className="button-default credit-button" onClick={toggle}>Credits</button>
        <Modal
          isShowing={isShowing}
          hide={toggle}
        />
      </SubContainer>
    </Container>
  );
}

export default App;
