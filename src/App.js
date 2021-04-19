import { AsyncUseState } from "./AsyncUseState";
import { CallbackUseState } from "./CallbackUseState";

function App() {
  return (
    <div className="container">
      <AsyncUseState />
      <CallbackUseState />
    </div>
  );
}

export default App;
