import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Header from 'components/Header';
import Home from 'pages/Home';

import { store, persistor } from './store';

import './styles/main.scss';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Header />
      <Home />
    </PersistGate>
  </Provider>
);

export default App;
