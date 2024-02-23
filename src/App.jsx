import { UseContextProvider } from "./component/UseContext";
import Body from "./component/Body";
import Dishplay from "./component/Dishplay";

function App() {
  return (
    <UseContextProvider>
      <Body />
      <Dishplay />
    </UseContextProvider>
  );
}

export default App;
