import { AppContextProvider } from './AppContext';
import { Component1 } from './Components';

function App() {
  return (
    <AppContextProvider>
      <Component1 />
    </AppContextProvider>
  );
}

export default App;
