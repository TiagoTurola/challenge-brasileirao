import Table from "components/table/table";
import { ChevronDownIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { getPlayerWithMostGoals } from "hooks/get-player-most-goals";

const Statistics = () => {
  const [statistics, setStatistics] = useState([]);

  async function getAllPlayer() {
    const playerList = await getPlayerWithMostGoals();
    setStatistics(playerList);
  }

  useEffect(() => {
    getAllPlayer();
  }, [statistics.length]);
  return (
    <>
      <div className="w-body mx-auto bg-table m-1 pt-3 pl-3 pb-2 text-white text-sm">
        <h1 className="p-5 font text-lg">Gols</h1>
        <div className="w-full mx-auto m-1 pt-3 pl-3 pb-2 text-white text-md">
          <table className="table-auto">
            <thead>
              <tr className="gap-5">
                <th className="w-96 text-start text-md">Jogador</th>
                <th className="w-80 text-end text-md">Gols</th>
              </tr>
            </thead>
            {statistics.map((player: any, index: number) => (
              <tbody key={player.key}>
                <tr key={player.key}>
                  <td
                    key={player.key}
                    className="text-start text-md flex gap-2 m-2 pt-4"
                  >
                    {index}

                    <img
                      src="https://www.pngkey.com/png/detail/798-7983714_my-husband-and-i-would-like-to-take.png"
                      height="10"
                      width="60"
                      alt="escudo"
                      className="rounded-full ml-2"
                    />

                    <div className="flex flex-col">
                      {player.atleta.nome_popular}
                      <div className="flex pt-4 gap-4">
                        <img
                          src={player.time.escudo}
                          height="20"
                          width="20"
                          alt="escudo"
                        />{" "}
                        {player.time.nome_popular}
                      </div>
                    </div>
                  </td>
                  <td key={player.key} className="text-end text-md p-2">
                    {player.gols}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default Statistics;
