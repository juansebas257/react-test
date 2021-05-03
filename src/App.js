import { Component } from "react";
import CounterTitle from "./components/CounterTitle";
import Counter from "./components/Counter";

class App extends Component {
  render() {
    return (
      [
        <CounterTitle key="1" title="Título del cosito" page={1} />,
        <Counter key="2" />
      ]
    )
  }
}

export default App;