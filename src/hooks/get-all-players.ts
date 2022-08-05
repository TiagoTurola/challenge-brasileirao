import instance2 from "./axios-instance2";

export const getAllPlayers = async () => {
  try {
    const response = await instance2.get(`/mercado/destaques`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};