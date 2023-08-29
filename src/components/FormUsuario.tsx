'use client';
import React from 'react';
import Input from './Input';
import IUserData from '@/interfaces/IUserData';
import Button from './Button';
import {useSnackbar} from 'notistack';

const FormUsuario = () => {
  const {enqueueSnackbar} = useSnackbar();
  const [userData, setUserData] = React.useState<IUserData>({
    email: '',
    nome: '',
    senha: '',
    arquivo: null,
  });
  const [erros, setErros] = React.useState<string[]>([]);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;
    if (key === 'arquivo' && e.currentTarget.files) {
      setUserData({...userData, arquivo: e.currentTarget.files[0]});
    }

    setUserData({...userData, [key]: value});
  };
  function validaDados({nome, arquivo, email, senha}: IUserData): boolean {
    const emailValido = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
    const senhaValida = new RegExp(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    );

    if (nome.length < 3) {
      enqueueSnackbar('O nome deve ter mais 3 caracteres ou mais');
      return false;
    }

    if (email.length < 3) {
      enqueueSnackbar('Preencha um email válido');
      return false;
    }
    if (!emailValido.test(email)) {
      enqueueSnackbar('Preencha um email válido');
      return false;
    }
    if (!senhaValida.test(senha)) {
      enqueueSnackbar(
        'A senha precisa ter caracter maiúsculo, minúsculo e digito. Sem caracteres especiais. E om no mínimo 8 caracteres',
      );
      return false;
    }
    return true;
  }

  const formSubmit: React.FormEventHandler<
    HTMLFormElement | HTMLButtonElement
  > = (e) => {
    e.preventDefault();

    if (validaDados(userData)) {
      console.log(userData);
    }
  };
  return (
    <form onSubmit={formSubmit} className="grid sm:grid-cols-1 md:grid-cols-2">
      <div className="m-2">
        <Input
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          label="Nome"
          id="nome"
          name="nome"
          value={userData.nome}
          onChange={handleChange}
        />
      </div>
      <div className="m-2">
        <Input
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          label="Email"
          id="email"
          name="email"
          type="email"
          helperText="Email válido: nome@domain.com"
          value={userData.email}
          onChange={handleChange}
        />
      </div>
      <div className="m-2">
        <Input
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          label="Senha"
          id="senha"
          name="senha"
          type="password"
          helperText="Sem caracteres especiais:@#$%&"
          value={userData.senha}
          onChange={handleChange}
        />
      </div>
      <div className="m-2">
        <Input
          required
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none p-2.5 file:h-full"
          label="Arquivo"
          type="file"
          name="arquivo"
          id="arquivo"
          accept="application/pdf"
          onChange={handleChange}
          helperText="Somente arquivos PDF"
        />
      </div>
      <div className="m-2">
        <Button
          className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none dark:focus:ring-blue-800"
          type="submit"
          onSubmit={formSubmit}
        >
          Enviar
        </Button>
        <Button
          className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none dark:focus:ring-red-800"
          onClick={() => {
            setUserData({
              email: '',
              nome: '',
              senha: '',
              arquivo: null,
            });
          }}
        >
          Limpar
        </Button>
      </div>
    </form>
  );
};

export default FormUsuario;
