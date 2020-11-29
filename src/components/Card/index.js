import { useCallback, useState } from 'react';
import { FaQuestion } from 'react-icons/fa';

const Card = ({ Icon }) => {
  const [open, setOpen] = useState(false);

  const onClick = useCallback(() => {
    console.log('exec');
    setOpen((state) => !state);
  }, []);

  return (
    <>
      <button type="button" className="card" onClick={onClick}>
        <div
          className={`card__side card__side--front ${
            open && 'card__side--front-flip'
          }`}
        >
          <FaQuestion className="card__image card__image--front" />
        </div>
        <div
          className={`card__side card__side--back ${
            open && 'card__side--back-flip'
          }`}
        >
          <Icon className="card__image card__image--back" />
        </div>
      </button>
    </>
  );
};

export default Card;
