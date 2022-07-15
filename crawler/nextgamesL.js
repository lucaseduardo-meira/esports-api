const request = require("request");
const cheerio = require("cheerio");
const axios = require("axios");

const url = "https://maisesports.com.br/agenda/proximas/lol/";

request({ url, gzip: true }, function (err, res, body) {
  if (err) {
    console.log("ERRO: " + err);
  } else {
    var $ = cheerio.load(body);
    var ligas = [];
    // Coloca todas as ligas que terão jogos na array ligas
    $("a.jCVTeL > div.gwKKIh > div").each(function () {
      const indice = $(this).text().indexOf(":");
      const liga = $(this).text().slice(0, indice);
      if (!ligas.includes(liga)) {
        ligas.push(liga);
      }
    });
    // Ordena os jogos de cada liga com data
    ligas.forEach((liga) => {
      console.log(liga);
      $("a.jCVTeL").each(function () {
        // Informações de liga e horario do jogo
        const info_jogo = $(this).find("div.gwKKIh").text().trim();
        var liga_jogo = info_jogo.slice(0, info_jogo.indexOf(":"));
        if (liga_jogo.includes(liga)) {
          var time1 = $(this)
            .find("div.mobileTeamContainer > p")
            .first()
            .text()
            .trim();
          var time2 = $(this)
            .find("div.mobileTeamContainer > p")
            .last()
            .text()
            .trim();
          var data = $(this).find("div.gwKKIh span").text().trim();
          console.log(`=======>${time1} X ${time2} => ${data}`);
        }
      });
    });
  }
});
