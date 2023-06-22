import Button from "./components/Button";
import buttons from "./buttons/dataButtons";
import ContainerButtons from "./components/ContainerButtons";
import Display from "./components/Display";
import AppCalc from "./components/AppCalc";
import { useState } from "react";
import Operators, { initialState } from "./Operators";

function App() {

  const [ state, setState ] = useState(initialState);

  const listButtons = buttons.map((button) => (
    <Button
      content={button.value}
      variant={button.variant}
      key={button.value}
      handleClick={() => Operators(button.value, button.variant, state, setState)}
    />
  ));

  return (
    <>
      <AppCalc>
        <Display values={state.values} operator={state.operator}/>
        <ContainerButtons>{listButtons}</ContainerButtons>
      </AppCalc>
    </>
  );
}

export default App;
