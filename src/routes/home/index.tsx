import { Game } from "./components/game";
import { useGetAllGamesQuery } from "../../modules/game";
import { Button } from "../../components/button";

export const Home = () => {
  const { isLoading, error, data, refetch } = useGetAllGamesQuery();

  if (error) {
    return (
      <div>
        <p style={{ textAlign: "center" }}>Something went wrong</p>
        <Button onClick={refetch} text="Retry" />
      </div>
    );
  }
  if (isLoading) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  return (
    <div>
      {data?.map((obj) => (
        <Game key={obj.id} {...obj} />
      ))}
    </div>
  );
};
