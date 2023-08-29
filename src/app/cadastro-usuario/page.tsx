import FormUsuario from '@/components/FormUsuario';
import React from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Cadastro de Usuário',
  description: 'Desafio Octokey',
};
const Usuario = () => {
  return (
    <main className="container mx-auto">
      <FormUsuario />
    </main>
  );
};

export default Usuario;
