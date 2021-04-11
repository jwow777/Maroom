import { BrowserRouter, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Result from "./Result";

createStore({});

export default function App() {
  return (
    <StateMachineProvider>
      <BrowserRouter>
        <Route exact path="/" component={Step1} />
        <Route path="/step2" component={Step2} />
        <Route path="/step3" component={Step3} />
        <Route path="/result" component={Result} />
      </BrowserRouter>
    </StateMachineProvider>
  );
}