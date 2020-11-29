import useArrayUtils from 'hooks/useArrayUtils';

import cardsData from 'constants/cardsData';

import Card from 'components/Card';
import Contador from 'components/Contador';

const Home = () => {
  const { suffleCards } = useArrayUtils(cardsData);

  return (
    <div className="home">
      <Contador />
      <div className="home__card--box">
        {suffleCards.map(({ icon, matchId }) => (
          <Card key={Math.random()} Icon={icon} matchId={matchId} />
        ))}
      </div>
    </div>
  );
};

export default Home;
