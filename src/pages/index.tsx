import GameList from "components/game-list/game-list";
import Header from "components/header/header";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Header></Header>
      <GameList></GameList>
    </>
  );
};

export default Home;
