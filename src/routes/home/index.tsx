import { useEffect } from "react";
import { Game } from "./components/game";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { getGames, addGame, clear } from "../../modules/game";
import { Button } from "../../components/button";
import { TGame } from "./types";

export const Home = () => {
  const { gameList, isLoading } = useAppSelector(({ gameSlice }) => gameSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  const handleAddPress = (game: TGame) => {
    dispatch(addGame(game));
  };

  const clearList = () => {
    dispatch(clear());
  };

  const renderLoader = () => {
    return <p>Loading...</p>;
  };

  const renderGameList = () => {
    return gameList.map((obj) => <Game key={obj.id} {...obj} />);
  };

  return (
    <div>
      <Button
        onClick={() => handleAddPress({ id: 9998, name: "Alien Shooter" })}
        text="Add Alien Shooter"
      />
      <Button
        onClick={() =>
          handleAddPress({
            id: 9999,
            name: "Medal of Honor Allied Assault",
            description:
              "Прикольный шутан, особенно красивы миссии в зимнем лесу",
          })
        }
        text="Add MOHAA"
      />
      <Button onClick={clearList} text="Clear list" />
      {isLoading ? renderLoader() : renderGameList()}
    </div>
  );
};
