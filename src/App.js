import './App.css';
import Swapi from './Components/Swapi/Swapi';
import { Provider } from 'react-redux';
import { storeData } from './store';
import storeDataToolkit from './toolkitStore';
import SwapiToolkit from './Components/SwapiToolkit/SwapiToolkit';

function App() {
  return (
    <div className="App">
        <Provider store={storeData}>
            <Swapi />
        </Provider>
        <Provider store={storeDataToolkit}>
            <SwapiToolkit />
        </Provider>
    </div>
  );
}

export default App;
