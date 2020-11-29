import useArrayUtils from 'hooks/useArrayUtils';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';

import cardsData from 'constants/cardsData';

import Card from 'components/Card';
import Contador from 'components/Contador';
import ModalContent from 'components/ModalContent';
import { useCallback, useMemo, useState } from 'react';
import { actionSetPlayer } from 'store/modules/player/actions';
import Input from 'components/Input';

const Home = () => {
  const { suffleCards } = useArrayUtils(cardsData);
  const { player } = useSelector((state) => state.player);
  const [playerName, setPlayerName] = useState('');

  const dispatch = useDispatch();

  const handleCreatePlayer = useCallback(() => {
    if (playerName.length < 2) {
      alert('O nome deve ter pelo menos 3 letras');
      return;
    }

    const id = Math.floor(Math.random() * 2000);
    const newPlayer = { id, name: playerName };

    dispatch(actionSetPlayer(newPlayer));
    setPlayerName('');
  }, [dispatch, playerName]);

  const cards = useMemo(() => {
    return suffleCards();
  }, [suffleCards]);

  return (
    <>
      <div className="home">
        <Contador />
        <div className="home__card--box">
          {cards.map(({ icon, ...card }) => (
            <Card key={card.id} Icon={icon} {...card} />
          ))}
        </div>
      </div>
      <Modal
        isOpen={!player}
        ariaHideApp={false}
        className="Modal"
        overlayClassName="Overlay"
      >
        <ModalContent
          title="Seja bem-vindo"
          message="Vamos Jogar? Insira seu nome."
          componentBody={<Input value={playerName} setValue={setPlayerName} />}
          buttonLabel="Começar"
          buttonAction={handleCreatePlayer}
        />
      </Modal>
    </>
  );
};

export default Home;
