import React from 'react';
import { Games } from './types';
import { Game } from './components/game';
import { AxiosClient } from '../../modules/axios-client';

export const Home = () => {
  const [games, setGames] = React.useState<Games[]>([]);

  React.useEffect(() => {
    AxiosClient.get('/test').then(function ({ data }) {
      setGames(data);
    });
  }, []);

  console.log(games);

  return (
    <div>
      {games.map((obj) => (
        <Game key={obj.id} {...obj} />
      ))}
    </div>
  );
};
