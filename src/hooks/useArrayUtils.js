import { useMemo } from 'react';

const useArrayUtils = (array) => {
  const duplicateCards = useMemo(() => {
    return array.reduce((acc, current) => {
      return acc.concat([current, current]);
    }, []);
  }, [array]);

  const suffleCards = useMemo(() => {
    const suffleArray = [...duplicateCards];
    for (let i = suffleArray.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = suffleArray[i];
      suffleArray[i] = { ...suffleArray[j], id: i };
      suffleArray[j] = { ...temp, id: j };
    }

    return suffleArray;
  }, [duplicateCards]);

  return { duplicateCards, suffleCards };
};

export default useArrayUtils;
