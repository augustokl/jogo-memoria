import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { FaUserPlus } from 'react-icons/fa';
import { actionSetPlayer } from 'store/modules/player/actions';

const Header = () => {
  const dispatch = useDispatch();

  const handleNewPlayer = useCallback(() => {
    dispatch(actionSetPlayer());
  }, [dispatch]);

  return (
    <header className="header">
      <Logo className="header__logo" />
      <h1 className="header__text">Jogo da Memória</h1>
      <nav className="header__nav">
        <button
          type="button"
          className="btn btn--header"
          onClick={handleNewPlayer}
        >
          <FaUserPlus className="btn__icon" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
