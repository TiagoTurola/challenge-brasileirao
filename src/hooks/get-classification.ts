import instance from "./axios-instance";

export const getClassification = async () => {
  try {
    const response = await instance.get(`/campeonatos/14/tabela`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};