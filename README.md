# Web Crawler E-Sports  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



# Sobre o projeto


O Web crawler E-sports pega dados do site maisesports.com.br, porém organiza os dados recebidos em formato JSON, Os arquivos da pasta crawler separam os jogos (Counter Stike,Valorant,League of legends e Rainbow Six) e o os dados retornados organiza os campeonatos de cada jogo e as partidas de cada campeonato

O sistema buscaria ser consumido por um front-end que se assemelhasse ao onefootball.com/pt-br/jogos , ordenando cada dia,campeonato e jogos de cada campeonato

# Exemplo de front-end que consumiria o JSON


![Onefotball](https://user-images.githubusercontent.com/102125807/185726021-38a8e0c3-e3a8-48a1-b507-9eb7e60e7d26.png)


# Tecnologias utilizadas
## Back end
- NodeJS
- Cheerio


# Como executar o projeto

Pré-requisitos: Vscode / yarn

```bash
# clonar repositório
git clone https://https://github.com/lucaseduardo-meira/esports-api

# entrar na pasta do projeto
cd esports-api

# instalar dependências
yarn install

# executar o projeto
node crawler/nextgamesCS.js
node crawler/nextgamesLol.js
node crawler/nextgamesR6.js
node crawler/nextgamesVal.js
node crawler/prevgamesCS.js
node crawler/prevgamesLol.js
node crawler/prevgamesR6.js
node crawler/prevgamesVal.js

# Acessando os resultados
Basta acessar a pasta do jogo seleciado e acessar o arquivo que foi solicitado
```

# Autor

Lucas Eduardo Meira

http://www.linkedin.com/in/lucas-eduardo-meira
