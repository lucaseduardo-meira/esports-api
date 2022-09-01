const request = require("request");
const cheerio = require("cheerio");

const url_antigas = "https://maisesports.com.br/agenda/antigas/lol/";
const url_proximas = "https://maisesports.com.br/agenda/proximas/lol/";

function prevgameslol(req, res) {
  request({ url_antigas, gzip: true }, function (err, response, body) {
    if (err) {
      console.log("ERRO: " + err);
    } else {
      var $ = cheerio.load(body);
      var ligas = [];
      var lol = [];
      // Coloca todas as ligas que terão jogos na array ligas
      $("a.jCVTeL > div.gwKKIh > div").each(function () {
        const indice = $(this).text().indexOf(":");
        const liga = $(this).text().slice(0, indice);
        if (!ligas.includes(liga)) {
          ligas.push(liga);
        }
      });
      // Ordena os jogos de cada liga com data
      if (ligas.length <= 0) {
        return res.send("Não há jogos para listar");
      } else {
        ligas.forEach((liga) => {
          var campeonato = {};
          campeonato.nome = liga;
          var matches = [];
          $("a.jCVTeL").each(function () {
            // Informações de liga e horario do jogo
            const info_jogo = $(this).find("div.gwKKIh").text().trim();
            var liga_jogo = info_jogo.slice(0, info_jogo.indexOf(":"));
            let match = {};
            // Recebe os jogos dos times que fazem parte da liga que está sendo procurada
            if (liga_jogo === liga) {
              match.time1 = $(this)
                .find("div.mobileTeamContainer > p ")
                .first()
                .text()
                .trim();
              match.time2 = $(this)
                .find("div.mobileTeamContainer > p")
                .last()
                .text()
                .trim();
              var result1 = $(this)
                .find("div.mobileTeamContainer > div.exlLqx ")
                .first()
                .text()
                .trim();
              var result2 = $(this)
                .find("div.mobileTeamContainer > div.exlLqx")
                .last()
                .text()
                .trim();
              match.data = $(this).find("div.gwKKIh span").text().trim();
              var results = [Number(result1), Number(result2)];
              match.results = results;
              matches.push(match);
            }
            campeonato.matches = matches;
            lol.push(campeonato);
          });
        });
      }
      res.json(lol);
    }
  });
}

function nextgameslol(req, res) {
  request({ url_proximas, gzip: true }, function (err, response, body) {
    if (err) {
      console.log("ERRO: " + err);
    } else {
      var $ = cheerio.load(body);
      var ligas = [];
      var lol = [];
      // Coloca todas as ligas que terão jogos na array ligas
      $("a.jCVTeL > div.gwKKIh > div").each(function () {
        const indice = $(this).text().indexOf(":");
        const liga = $(this).text().slice(0, indice);
        if (!ligas.includes(liga)) {
          ligas.push(liga);
        }
      });
      // Ordena os jogos de cada liga com data
      if (ligas.length < 0) {
        console.log("Não há jogos para listar");
      } else {
        ligas.forEach((liga) => {
          var campeonato = {};
          campeonato.nome = liga;
          var matches = [];
          $("a.jCVTeL").each(function () {
            // Informações de liga e horario do jogo
            const info_jogo = $(this).find("div.gwKKIh").text().trim();
            var liga_jogo = info_jogo.slice(0, info_jogo.indexOf(":"));
            let match = {};
            // Recebe os jogos dos times que fazem parte da liga que está sendo procurada
            if (liga_jogo === liga) {
              match.time1 = $(this)
                .find("div.mobileTeamContainer > p")
                .first()
                .text()
                .trim();
              match.time2 = $(this)
                .find("div.mobileTeamContainer > p")
                .last()
                .text()
                .trim();
              match.data = $(this).find("div.gwKKIh span").text().trim();
              matches.push(match);
            }
          });
          campeonato.matches = matches;
          lol.push(campeonato);
        });
      }
      res.json(lol);
    }
  });
}

module.exports = { prevgameslol, nextgameslol };