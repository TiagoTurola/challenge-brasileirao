import instance from "./axios-instance";

export const getPlayerWithMostGoals = async () => {
  try {
    const response = await instance.get(`/campeonatos/14/artilharia`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};