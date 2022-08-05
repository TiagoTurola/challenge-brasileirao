import { getClassification } from "hooks/get-classification";
import React, { useState, useEffect } from "react";

const Table = () => {
  const [classification, setClassification] = useState([]);

  async function getAllClassification() {
    const classificationList = await getClassification();
    setClassification(classificationList);
  }

  useEffect(() => {
    getAllClassification();
  }, [classification.length]);

  return (
    <>
      <div className="w-full mx-auto m-1 pt-3 pl-3 pb-2 text-white text-md">
        <table className="table-auto">
          <thead>
            <tr className="gap-5">
              <th className="w-96 text-start text-md">Clube</th>
              <th className="w-5 text-center text-md">Pts</th>
              <th className="w-5 text-center text-md">PJ</th>
              <th className="w-5 text-center text-md">VIT</th>
              <th className="w-5 text-center text-md">E</th>
              <th className="w-5 text-center text-md">DER</th>
              <th className="w-5 text-center text-md">GP</th>
              <th className="w-5 text-center text-md">GC</th>
              <th className="w-5 text-center text-md">SG</th>
              <th className="w-60 text-center text-md">Últimas cinco</th>
            </tr>
          </thead>
          {classification.map((team: any) => (
            <tbody key={team.key}>
              <tr key={team.key}>
                <td key={team.key} className="text-start text-md flex gap-2 pt-4">
                  {team.posicao} <img src={team.time.escudo} height="20" width="20" alt="escudo" /> {team.time.nome_popular}
                </td>
                <td key={team.key} className="text-center text-md p-4">
                  {team.pontos}
                </td>
                <td key={team.key} className="text-center text-md p-4">
                  {team.jogos}
                </td>
                <td key={team.key} className="text-center text-md p-4">
                  {team.vitorias}
                </td>
                <td key={team.key} className="text-center text-md p-4">
                  {team.empates}
                </td>
                <td key={team.key} className="text-center text-md p-4">
                  {team.derrotas}
                </td>
                <td key={team.key} className="text-center text-md p-4">
                  {team.gols_pro}
                </td>
                <td key={team.key} className="text-center text-md p-4">
                  {team.gols_contra}
                </td>
                <td key={team.key} className="text-center text-md p-4">
                  {team.saldo_gols}
                </td>
                <td key={team.key} className="text-center text-md p-4">
                  {team.ultimos_jogos}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default Table;
