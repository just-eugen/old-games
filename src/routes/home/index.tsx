import { useState, useEffect } from 'react';
import { Game } from './components/game';
import type { TGameList } from './types';
import { GameModule } from '../../modules/game';

export const Home = () => {
  const [games, setGames] = useState<TGameList>([]);
  const gameModule = new GameModule();

  useEffect(() => {
    const init = async () => {
      const res = await gameModule.getGames();
      setGames(res);
    };
    init();
  }, []);

  return (
    <div>
      {games.map((obj) => (
        <Game key={obj.id} {...obj} />
      ))}
    </div>
  );
};
