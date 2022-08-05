import React, { useEffect, useState } from "react";
import { getAllPlayers } from "hooks/get-all-players";

const PlayerList = () => {
  const [players, setPlayers] = useState([]);

  async function getAllPlayer() {
    const allPlayers = await getAllPlayers();
    setPlayers(allPlayers);
    console.log(players);
  }

  useEffect(() => {
    getAllPlayer();
  }, [players.length]);
  return (
    <>
      <div
        key=""
        className="w-body mx-auto text-white bg-zinc-800 grid grid-cols-7 grid-rows-6 grid-flow-rows gap-2 overflow-hidden p-2"
      >
        {players.map((player: any, index: number) => (
          <div
            key=""
            className="flex flex-col border border-neutral-700 rounded-xl overflow-hidden items-start
            justify-between"
          >
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-XcVU55keVVmrThnswAHMzAqWAeApzVem6w&usqp=CAU"
                className="rounded-t-xl"
                height="70"
                alt="foto"
              />
              <div className="p-2">
              {player.Atleta.apelido} <br />
              <p className="text-xs">{player.posicao}</p>
              </div>
            </div>
            <div className="flex gap-2 p-1">
              <img src={player.escudo_clube} width="20" alt="escudo" />
              <p className="text-xs">{player.clube_nome}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PlayerList;
