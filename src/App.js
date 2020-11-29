import { BrowserRouter } from 'react-router-dom';

import Header from 'components/Header';
import Routes from './routes';

import './styles/main.scss';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes />
  </BrowserRouter>
);

export default App;
