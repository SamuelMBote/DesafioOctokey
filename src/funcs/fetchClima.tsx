import IClima from '@/interfaces/IClima';
import ICoordenadas from '@/interfaces/ICoordenadas';

export default async function fetchClima(coords: ICoordenadas) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${coords.latitude},${coords.longitude}`,
    );

    if (!response.ok) {
      throw new Error('Erro ao carregar clima');
    }
    const json = (await response.json()) as IClima;
    return json;
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
    return null;
  }
}
