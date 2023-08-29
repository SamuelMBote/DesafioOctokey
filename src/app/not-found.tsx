import {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Erro 404 Not Found',
};
export default function Error404() {
  return (
    <main className="container mx-auto my-24">
      <div className=" flex flex-col justify-stretch items-center">
        <h1 className="text-gray-900  text-3xl md:text-5xl font-extrabold mb-2 text-center">
          Erro 404. Página Não Encontrada
        </h1>
        <Image alt="lost" width={500} height={500} src={'/404.gif'} />
        <Link className="text-center text-2lg my-4" href={'/'}>
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
