# Web Crawler E-Sports  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



# Sobre o projeto


O Web crawler E-sports pega dados do site maisesports.com.br, porém organiza os dados recebidos em formato JSON, Os arquivos separam os jogos (Counter Stike,Valorant,League of legends e Rainbow Six) e o os dados retornados organiza os campeonatos de cada jogo e as partidas de cada campeonato

O sistema busca seria consumido por um front-end, buscando uma aplicação similiar ao onefootball.com/pt-br/jogos , ordenando cada dia,campeonato e jogos de cada campeonato



# Tecnologias utilizadas
## Back end
- NodeJS
- Cherrio


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
