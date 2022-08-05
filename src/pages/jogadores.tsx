import Header from "components/header/header";
import PlayerList from "components/player-list/player-list";
import type { NextPage } from "next";

const Jogadores: NextPage = () => {
  return (
    <>
      <Header></Header>
      <PlayerList></PlayerList>
    </>
  );
};

export default Jogadores;
