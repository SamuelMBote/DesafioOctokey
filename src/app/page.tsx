import Link from 'next/link';
import {Metadata} from 'next';
export const metadata: Metadata = {
  title: 'Início',
  description: 'Desafio Octokey',
};
export default function Home() {
  return (
    <main className="">
      <div className=" py-4 px-4 mx-auto max-w-screen-xl lg:py-8">
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
          <a
            href="#"
            className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2"
          >
            Clima
          </a>
          <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
            Quer saber como está o clima na sua cidade?
          </h1>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
            Veja aqui a previsãao do tempo, com informações fresquinhas (...
            quer dizer, talvez estão calorosas kkk) vindas da weather.api
          </p>
          <Link
            className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            href={'/clima'}
          >
            Ver Clima
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <a
              href="#"
              className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2"
            >
              CEP
            </a>

            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
              Precisa encontrar um endereço?
            </h2>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
              Ta na hora de enviar os produtos, mas o endereço está incompleto
              né? Busque aqui as informções corretas do seu cliente usando a API
              ViaCEP
            </p>
            <Link
              className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
              href={'/cep'}
            >
              Buscar CEP
            </Link>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <a
              href="#"
              className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2"
            >
              Usuário
            </a>
            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
              Cadastre um usuário do sistema
            </h2>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
              Colaborador novo na empresa? Entre aqui para cadastrar os dados e
              enviar os documentos para a nuvem
            </p>
            <Link
              className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
              href={'/cadastro-usuario'}
            >
              Cadastrar Usuário
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

