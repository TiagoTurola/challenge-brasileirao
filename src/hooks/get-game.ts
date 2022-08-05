import instance from "./axios-instance";

export interface GetGamesProps {
  campeonatoId?: string;
  rodada: string;
  gameList?: any;
}

export const getGames = async ({ campeonatoId, rodada }: GetGamesProps) => {
  try {
    const response = await instance.get(
      `/campeonatos/${campeonatoId}/rodadas/${rodada}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
