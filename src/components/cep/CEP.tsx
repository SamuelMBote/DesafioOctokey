'use client';
import Button from '@/components/Button';
import ExibeCEP from '@/components/cep/ExibeCEP';
import Input from '@/components/Input';
import Select from '@/components/Select';
import fetchCEP from '@/funcs/fetchCep';
import fetchCidadeUF from '@/funcs/fetchCidades';
import IBusca from '@/interfaces/IBusca';
import ICEP from '@/interfaces/ICep';
import ICidadeUF from '@/interfaces/ICidadeUF';

import React from 'react';

const PainelCEP = () => {
  const [lstCidadeUF, setLstCidadeUF] = React.useState<ICidadeUF[] | null>(
    null,
  );
  const [lstUF, setLstUF] = React.useState<string[]>();
  const [busca, setBusca] = React.useState<IBusca>({
    uf: 'Seleciona uma UF',
    localidade: 'Seleciona uma Cidade',
    logradouro: '',
  });
  const [lstCEP, setLstCEP] = React.useState<ICEP[] | null>(null);
  async function defineLstCidades() {
    const lista = localStorage.getItem('listaCidades');
    if (!lista || !lista.length) {
      const LST = await fetchCidadeUF();
      setLstCidadeUF(LST);
    } else {
      setLstCidadeUF(JSON.parse(lista));
    }
  }

  async function defineLstUF(lista: ICidadeUF[]) {
    if (lista) {
      let lstUF = lista.map((item) => item.ufSigla);
      lstUF = lstUF
        .filter((element, index) => {
          return lstUF.indexOf(element) === index;
        })
        .sort();
      setLstUF(lstUF);
    } else {
      await defineLstCidades();
    }
  }
  React.useEffect(() => {
    if (window && typeof window !== 'undefined') {
      defineLstCidades();
    }
  }, []);

  React.useEffect(() => {
    if (lstCidadeUF) {
      defineLstUF(lstCidadeUF);
    }
  }, [lstCidadeUF]);
  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (e) => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;
    setBusca({...busca, [key]: value});
  };

  function executarBuscar() {
    const aguarda = setTimeout(async () => {
      if (
        busca &&
        busca.uf &&
        busca.localidade &&
        busca.localidade.length >= 3 &&
        busca.logradouro &&
        busca.logradouro.length >= 3
      ) {
        const ceps = await fetchCEP(busca);
        setLstCEP(ceps);
      }
    }, 1000);
  }
  React.useEffect(executarBuscar, [busca]);
  return (
    <main className="container mx-auto">
      <div className="grid  mb-6 grid-cols-1 md:grid-cols-2 ">
        <div className="m-2 col-start-1 ">
          <Select
            name="uf"
            id="uf"
            label="UF"
            value={busca.uf}
            defaultValue={lstUF && lstUF[0].toString()}
            onChange={handleChange}
            placeholder="UF"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="Seleciona uma UF" disabled>
              Seleciona uma UF
            </option>
            {lstUF &&
              lstUF.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
          </Select>
        </div>
        <div className="m-2">
          <Select
            name="localidade"
            id="localidade"
            label="Municipio"
            value={busca.localidade}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="Seleciona uma Cidade" disabled>
              Seleciona uma Cidade
            </option>
            {lstCidadeUF &&
              lstCidadeUF.map((item) => {
                if (item.ufSigla === busca.uf)
                  return (
                    <option
                      key={`${item.municipio} - ${item.ufSigla}`}
                      value={item.municipio}
                    >
                      {item.municipio}
                    </option>
                  );
              })}
          </Select>
        </div>
        <div className="m-2 col-span-12">
          <Input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            label="Pesquise a Rua"
            placeholder="Digite um nome de rua"
            name="logradouro"
            id="logradouro"
            value={busca.logradouro}
            onChange={handleChange}
          />
        </div>
        <div className="m-2 col-span-12">
          <Button
            onClick={executarBuscar}
            className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none dark:focus:ring-blue-800"
          >
            Buscar
          </Button>
          <Button
            onClick={() => {
              setBusca({
                uf: 'Seleciona uma UF',
                localidade: 'Seleciona uma Cidade',
                logradouro: '',
              });
              setLstCEP(null);
            }}
            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none dark:focus:ring-red-800"
          >
            Limpar
          </Button>
        </div>
      </div>
      <div>
        <ul className="m-2 grid  md:grid-cols-2 lg:grid-cols-3 gap-3">
          {lstCEP &&
            lstCEP.map((cep) => {
              return (
                <li key={cep.cep}>
                  <ExibeCEP {...cep} />
                </li>
              );
            })}
        </ul>
      </div>
    </main>
  );
};

export default PainelCEP;
