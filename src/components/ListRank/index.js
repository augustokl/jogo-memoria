import { useSelector } from 'react-redux';
import { FaMedal, FaUser } from 'react-icons/fa';

const ListRank = () => {
  const { rank } = useSelector((state) => state.rank);

  return (
    <ul className="list">
      {rank.map((item, index) => (
        <li key={item.player.id} className="list__item">
          <p>
            {index < 3 ? <FaMedal /> : <FaUser />}
            {item.player.name}
          </p>
          <p>{item.plays}</p>
        </li>
      ))}
    </ul>
  );
};

export default ListRank;
