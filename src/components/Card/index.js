import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsQuestion } from 'react-icons/bs';
import {
  actionAddCount,
  actionSetMatch,
  actionSetSelected,
} from 'store/modules/cardSelected/actions';

const Card = ({ Icon, matchId }) => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const { target, matchList } = useSelector((state) => state.cardSelected);

  const stayOpen = useMemo(() => {
    return !!matchList.find((matchItem) => matchItem === matchId);
  }, [matchId, matchList]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (open && target !== matchId && !stayOpen) {
        dispatch(actionSetSelected(0));
        setOpen(false);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [matchId, open, target, dispatch]);

  useEffect(() => {
    if (!target && !stayOpen) {
      setOpen(false);
    }
  }, [target, matchId, stayOpen]);

  const onClick = useCallback(() => {
    setOpen(true);

    if (!target) {
      dispatch(actionSetSelected(matchId));
      return;
    }

    if (target === matchId) {
      dispatch(actionSetMatch(matchId));
      dispatch(actionSetSelected(0));
    }

    dispatch(actionAddCount());
  }, [target, dispatch, matchId]);

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
            open ? 'card__side--front-flip' : ''
          }`}
        >
          <BsQuestion className="card__image card__image--front" />
        </div>
        <div
          className={`card__side card__side--back ${
            open ? 'card__side--back-flip' : ''
          }`}
        >
          <Icon className="card__image card__image--back" />
        </div>
      </button>
    </>
  );
};

export default Card;
