'use client';
import fetchClima from '@/funcs/fetchClima';
import React from 'react';
import IClima from '@/interfaces/IClima';
import ExibeClima from './ExibeClima';

const PanelClima = () => {
  const [clima, setClima] = React.useState<IClima | null>(null);
  function carregaCoordenadas() {
    const successCallback = async ({coords}: GeolocationPosition) => {
      const weather = await fetchClima({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
      setClima(weather);
    };

    const errorCallback = (error: GeolocationPositionError) => {
      console.error(error);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }

  React.useEffect(carregaCoordenadas, []);

  return <section> {clima && <ExibeClima {...clima} />}</section>;
};

export default PanelClima;
