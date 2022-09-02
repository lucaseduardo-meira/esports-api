const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

const url = "https://maisesports.com.br/agenda/proximas/csgo/";

request({ url, gzip: true }, function (err, res, body) {
  if (err) {
    console.log("ERRO: " + err);
  } else {
    var $ = cheerio.load(body);
    var ligas = [];
    var cs = [];
    // Coloca todas as ligas que terão jogos na array ligas
    $("a.iLMKBR > div.gwKKIh > div").each(function () {
      const indice = $(this).text().indexOf(":");
      const liga = $(this).text().slice(0, indice);
      if (!ligas.includes(liga)) {
        ligas.push(liga);
      }
    });
    // Ordena os jogos de cada liga com data
    if (ligas.length == 0) {
      console.log("Não há jogos para listar");
    } else {
      ligas.forEach((liga) => {
        var campeonato = {};
        campeonato.nome = liga;
        var matches = [];
        $("a.iLMKBR").each(function () {
          // Informações de liga e horario do jogo
          const info_jogo = $(this).find("div.gwKKIh").text().trim();
          var liga_jogo = info_jogo.slice(0, info_jogo.indexOf(":"));
          let match = {};
          // R0ecebe os jogos dos times que fazem parte da liga que está sendo procurada
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
        cs.push(campeonato);
      });
      fs.writeFile(
        "/nextgamescsgo.json",
        JSON.stringify(cs, null, "  "),
        "utf-8",
        (error, result) => {
          if (error) {
            console.error(error);
            return;
          }
          console.log(result);
        }
      );
    }
  }
});
