import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsQuestion } from 'react-icons/bs';
import {
  actionOpenCard,
  actionSetMatch,
} from 'store/modules/cardSelected/actions';

const Card = ({ Icon, ...card }) => {
  const dispatch = useDispatch();
  const { matchList, cardsOpen } = useSelector((state) => state.cardSelected);

  const stayOpen = useMemo(() => {
    return !!matchList.find((matchItem) => matchItem === card.matchId);
  }, [card, matchList]);

  const isOpen = useMemo(() => {
    return stayOpen || !!cardsOpen.find((cardOpen) => cardOpen.id === card.id);
  }, [card, cardsOpen, stayOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        cardsOpen.length === 2 &&
        cardsOpen[0].matchId !== cardsOpen[1].matchId
      ) {
        dispatch(actionOpenCard());
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [dispatch, cardsOpen]);

  const onClick = useCallback(() => {
    if (isOpen) {
      return;
    }

    if (cardsOpen.length < 2) {
      dispatch(actionOpenCard(card));
    }

    if (cardsOpen.length === 1 && cardsOpen.includes(card.matchId)) {
      dispatch(actionSetMatch(card.matchId));
    }
  }, [dispatch, card, cardsOpen, isOpen]);

  return (
    <>
      <button
        type="button"
        className={`card ${stayOpen ? 'card--disable' : ''}`}
        onClick={onClick}
        disabled={stayOpen}
      >
        <div
          className={`card__side card__side--front ${
            isOpen ? 'card__side--front-flip' : ''
          }`}
        >
          <BsQuestion className="card__image card__image--front" />
        </div>
        <div
          className={`card__side card__side--back ${
            isOpen ? 'card__side--back-flip' : ''
          }`}
        >
          <Icon className="card__image card__image--back" />
        </div>
      </button>
    </>
  );
};

export default Card;
