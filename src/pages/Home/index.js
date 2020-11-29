import Card from 'components/Card';
import { FaReact, FaAngular, FaVuejs, FaGoogle, FaSass } from 'react-icons/fa';

const cards = [
  {
    title: 'hello',
    icon: FaReact,
  },
  {
    title: 'teste',
    icon: FaAngular,
  },
  {
    title: 2,
    icon: FaVuejs,
  },
  {
    title: 4,
    icon: FaGoogle,
  },
  {
    title: 4,
    icon: FaSass,
  },
  {
    title: 'hello',
    icon: FaReact,
  },
  {
    title: 'teste',
    icon: FaAngular,
  },
  {
    title: 2,
    icon: FaVuejs,
  },
  {
    title: 4,
    icon: FaGoogle,
  },
  {
    title: 4,
    icon: FaSass,
  },
];

const Home = () => {
  return (
    <div className="home">
      <div className="home__card--box">
        {cards.map(({ icon }) => (
          <Card Icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default Home;
