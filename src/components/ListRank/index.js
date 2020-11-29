import { useSelector } from 'react-redux';

const ListRank = () => {
  const { rank } = useSelector((state) => state.rank);

  return (
    <ul className="list">
      {rank.map((item) => (
        <li key={item.player.id} className="list__item">
          <p>{item.player.name}</p>
          <p>{item.plays}</p>
        </li>
      ))}
    </ul>
  );
};

export default ListRank;
