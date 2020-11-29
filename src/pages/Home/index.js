import useArrayUtils from 'hooks/useArrayUtils';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';

import cardsData from 'constants/cardsData';

import Card from 'components/Card';
import Contador from 'components/Contador';
import ModalContent from 'components/ModalContent';
import { useCallback, useState } from 'react';
import { actionSetPlayer } from 'store/modules/player/actions';
import Input from 'components/Input';

const Home = () => {
  const { suffleCards } = useArrayUtils(cardsData);
  const { player } = useSelector((state) => state.player);
  const [playerName, setPlayerName] = useState('');

  const dispatch = useDispatch();

  const handleCreatePlayer = useCallback(() => {
    const id = Math.floor(Math.random() * 2000);
    const newPlayer = { id, name: playerName };

    dispatch(actionSetPlayer(newPlayer));
  }, [dispatch, playerName]);

  return (
    <>
      <div className="home">
        <Contador />
        <div className="home__card--box">
          {suffleCards.map(({ icon, ...card }) => (
            <Card key={card.id} Icon={icon} {...card} />
          ))}
        </div>
      </div>
      <Modal isOpen={!player} className="Modal" overlayClassName="Overlay">
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
