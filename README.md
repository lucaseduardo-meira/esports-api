# Web Crawler E-Sports  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



# Sobre o projeto


O Web crawler E-sports pega dados do site maisesports.com.br, porém organiza os dados recebidos em formato JSON, Os arquivos da pasta crawler separam os jogos (Counter Stike,Valorant,League of legends e Rainbow Six) e o os dados retornados organiza os campeonatos de cada jogo e as partidas de cada campeonato

O projeto possui tanto a parte em formato de site como transcreve os arquivos de cada jogo

O sistema buscaria ser consumido por um front-end que se assemelhasse ao onefootball.com/pt-br/jogos , ordenando cada dia,campeonato e jogos de cada campeonato

# Layout

![Front-end-esports](https://user-images.githubusercontent.com/102125807/188228432-cada2991-0bf0-4df2-9c44-543989e2a0e5.png)


# Exemplo de front-end que consumiria o JSON


![Onefotball](https://user-images.githubusercontent.com/102125807/185726021-38a8e0c3-e3a8-48a1-b507-9eb7e60e7d26.png)


# Tecnologias utilizadas
## Back end
- NodeJS
- Cheerio
- Express


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
O projeto web estará rodando em http://localhost:3000

# O transcrever os arquivos separadamente
node csgo/nextgamesCS.js
node lol/nextgamesLol.js
node R6/nextgamesR6.js
node val/nextgamesVal.js
node csgo/prevgamesCS.js
node lol/prevgamesLol.js
node R6/prevgamesR6.js
node val/prevgamesVal.js

# Acessando os resultados
Basta acessar a pasta do jogo seleciado e acessar o arquivo que foi solicitado
```

# Autor

Lucas Eduardo Meira

http://www.linkedin.com/in/lucas-eduardo-meira
