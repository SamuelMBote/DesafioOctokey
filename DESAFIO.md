
# Desafio Octokey
Desafio Front End

## Qual foi a maior dificuldade que você enfrentou ao realizar o teste?

Geralmente é sempre dificil saber por onde começar.

Mas uma das maiores dificuldades para mim é sempre saber se a parte visual está agradavel e prática de se usar.

Apesar de já ter praticado com Tailwind, e apesar de ser bem similar ao css puro, precisei recorrer algumas vezes à documentação.

Achei prático trazer os recursos das APIs que usei, visto que já havia as usado varias vezes em outros projetos

## Descreva a funcionalidade e o por quê da utilização das bibliotecas escolhidas por você para concluir o desafio

O projeto contém 3 páginas além da página Home.
A página Home é só uma maneira divertida de alcançar os outros resultados do projeto

Na página Clima, ele utiliza sua permissao de localizacao, e com os dados de latitude e longitude buscados do navegador, ele faz requisicao na Weather API e traz os dados de acordo com os dados da sua cidade em tempo realizar

Na página de CEP, utilizei o webservice VIACEP. Ele traz as respostas em JSON ou XML, no caso optei por buscar em JSON. Há duas maneiras de se pesquisar por CEP ou pelo nome da rua. No caso utilizamos a busca para o nome da rua. Para que a requisicao traga resposta válida é necessário informar UF da busca, Cidade com no minimo 3 Caracteres e nome da rua com no mínimo 3 Caracteres. Ele retorna uma lista de ceps de acordo com o possivel endereço digitado. (Veja também na seção bônus)

A página de Cadastro de Usuário, utiliza formulários com dados preenchidos reativamente para cada input. Os campos são requeridos, por isso se não estiverem preenchidos corretamente, o formulários não é enviado. (Veja também na seção bônus)

## Como você se vê daqui a 5 anos?

Daqui 5 anos, pretendo estar trabalhando remotamente, como programador Senior FullStack .NET e talvez de uma cidade pequena e tranquila, onde vou trabalhar tanto secularmente, quanto vou poder dedicar à minha outra atividade favorita que é o trabalho voluntário.

Trabalhar remotamente vai ser de grande ajuda nesse meu alvo.


## Bônus

#### CEP
Para a tela de CEP, eu utilizei também a WebAPI do IBGE, com ela consegui trazer uma lista com todos os municipios e estados do Brasil e montei dos Select Forms, um para o usuário selecionar o estado do qual quer fazer a busca, e outro para selecionar a cidade.

O objetivo é contribuir num esforço menor em alcançar as cidades provaveis da busca, e ter um resultado de nome das ruas mais preciso.

O usuário não precisa terminar de digitar o nome da cidade completo, a medida que ele vai digitando a busca vai sendo feita, contribuindo também para agilidade em alcançar os dados

#### Cadastro Usuário

Adicionei o pacote notistack que permite transmitir notificacao enfileiradas.

No caso dessa pagina ele transmite as notificações quando os campos estão preenchidos incorretamente ou falta informação válida.
## Autor

- [@SamuelMBote](https://github.com/SamuelMBote)


## Stack

**Front-end:** NextJS, React, TypeScript, TailwindCSS

**Back-end:** WeatherAPi, ViaCEP
