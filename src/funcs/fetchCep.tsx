import IBusca from '@/interfaces/IBusca';
import ICEP from '@/interfaces/ICep';

export default async function fetchCEP({uf, localidade, logradouro}: IBusca) {
  try {
    const response = await fetch(
      `https://viacep.com.br/ws/${uf}/${localidade}/${logradouro}/json/`,
    );
    if (!response.ok) {
      throw new Error('Cep não encontrado');
    }
    const json = (await response.json()) as ICEP[];
    return json;
  } catch (error) {
    if (error instanceof Error) console.error(error);
    return null;
  }
}
