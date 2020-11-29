import { ReactComponent as Logo } from 'assets/logo.svg';
import { FaTrophy } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <Logo className="header__logo" />
      <h1 className="header__text">Jogo da Memória</h1>
      <nav className="header__nav">
        <button type="button" className="btn btn--header">
          <FaTrophy className="btn__icon" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
