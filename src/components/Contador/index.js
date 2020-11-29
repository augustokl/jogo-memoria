import { useSelector } from 'react-redux';

const Contador = () => {
  const { count } = useSelector((state) => state.cardSelected);

  return (
    <div className="contador">
      <h3 className="contador__text">
        Jogadas:
        {count}
      </h3>
    </div>
  );
};

export default Contador;
