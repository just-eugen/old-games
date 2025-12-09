import { useState, useEffect } from 'react';
import { Game } from './components/game';
import { AxiosClient } from '../../modules/axios-client';
import type { TGameList } from './types';

export const Home = () => {
  const [games, setGames] = useState<TGameList>([]);

  useEffect(() => {
    AxiosClient.get('/test').then(({ data }) => {
      setGames(data);
    });
  }, []);

  return (
    <div>
      {games.map((obj) => (
        <Game key={obj.id} {...obj} />
      ))}
    </div>
  );
};
