import ICidadeUF from '@/interfaces/ICidadeUF';

export default async function fetchCidadeUF() {
  try {
    const response = await fetch(
      'https://servicodados.ibge.gov.br/api/v1/localidades/municipios',
      {method: 'GET', cache: 'force-cache'},
    );
    if (!response.ok) {
      throw new Error('Não foi possível obter lista de estados e cidades');
    }
    const json = await response.json();
    if (Array.isArray(json)) {
      let nwLsCidadeUF: ICidadeUF[] = json.map((item) => {
        const municipio = item.nome;
        const ufSigla = item.microrregiao.mesorregiao.UF.sigla;
        const uf = item.microrregiao.mesorregiao.UF.nome;
        return {municipio, uf, ufSigla};
      });
      localStorage.setItem('listaCidades', JSON.stringify(nwLsCidadeUF));
      return nwLsCidadeUF as ICidadeUF[];
    } else return null;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    return null;
  }
}
