import Game from "components/game/game";
import { getRounds } from "hooks/get-rounds";
import React, { useEffect, useState } from "react";

const GameList = () => {
  const [round, setRound] = useState([]);

  async function getAllRounds() {
    const listAllGames = await getRounds({ campeonatoId: "14" });
    setRound(listAllGames);
  }

  useEffect(() => {
    getAllRounds();
  }, [round.length]);

  return (
    <>
      {round.map((r: any, index: number) => {
        return (
          <>
            <div
              key={index}
              className="w-body mx-auto bg-black m-1 pt-3 pl-3 pb-2 text-white text-sm"
            >
              Rodada {r.rodada} de {round.length}
            </div>
            <>
              <Game></Game>
            </>
          </>
        );
      })}
    </>
  );
};

export default GameList;
