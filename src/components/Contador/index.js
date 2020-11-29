import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';

import cardsData from 'constants/cardsData';
import ModalContent from 'components/ModalContent';
import ListRank from 'components/ListRank';

import { actionUpdateRank } from 'store/modules/rank/actions';
import { actionPlayAgain } from 'store/modules/player/actions';
import { actionClearCount } from 'store/modules/cardSelected/actions';

const Contador = () => {
  const { count, matchList } = useSelector((state) => state.cardSelected);
  const { player } = useSelector((state) => state.player);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const isFinish = useMemo(() => matchList.length === cardsData.length, [
    matchList,
  ]);

  useEffect(() => {
    if (isFinish) {
      dispatch(actionUpdateRank({ plays: count, player }));
      setOpen(true);
    }
  }, [isFinish, player, dispatch, count]);

  const handlePlayAgain = useCallback(() => {
    dispatch(actionPlayAgain());
    dispatch(actionClearCount());
    setOpen(false);
  }, [dispatch]);

  return (
    <>
      <div className="contador">
        <h3 className="contador__text">
          Jogadas:
          {count}
        </h3>
      </div>
      <Modal
        isOpen={open}
        className="Modal"
        overlayClassName="Overlay"
        ariaHideApp={false}
      >
        <ModalContent
          title="Parabéns"
          message={`Você venceu ;) em ${count} jogadas`}
          componentBody={<ListRank />}
          buttonLabel="Jogar Novamente"
          buttonAction={handlePlayAgain}
        />
      </Modal>
    </>
  );
};

export default Contador;
