import './App.css';
import { AppRoutes } from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import {  Provider} from 'react-redux'
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={ store } >
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
