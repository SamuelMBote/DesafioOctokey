import BreadCrumbs from '@/components/header-footer/BreadCrumbs';
import PainelCEP from '@/components/cep/CEP';
import {Metadata} from 'next';
import React from 'react';
export const metadata: Metadata = {
  title: 'CEP',
};
const CEP = () => {
  return (
    <main className="container mx-auto">
      <PainelCEP />
    </main>
  );
};

export default CEP;
