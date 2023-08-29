import PanelClima from '@/components/clima/Clima';

import {Metadata} from 'next';

import React from 'react';
export const metadata: Metadata = {
  title: 'Clima',
  description: 'Desafio Octokey',
};
const Clima = () => {
  return (
    <main className="container mx-auto">
      <PanelClima />
    </main>
  );
};
export default Clima;
