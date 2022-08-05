import instance from "./axios-instance";

interface GetRoundsProps {
  campeonatoId: string;
}

export const getRounds = async ({ campeonatoId }: GetRoundsProps) => {
  try {
    const response = await instance.get(`/campeonatos/${campeonatoId}/rodadas`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
