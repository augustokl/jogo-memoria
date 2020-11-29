import { Provider } from 'react-redux';

import Header from 'components/Header';
import Home from 'pages/Home';

import store from './store';

import './styles/main.scss';

const App = () => (
  <Provider store={store}>
    <Header />
    <Home />
  </Provider>
);

export default App;
