const request = require("request");
const cheerio = require("cheerio");
const axios = require("axios");

const url = "https://maisesports.com.br/agenda/proximas/lol/";

request({ url, gzip: true }, function (err, res, body) {
  if (err) {
    console.log("ERRO: " + err);
  } else {
    var $ = cheerio.load(body);
    // TIMES DA LIGA CBLOL
    $("a.jCVTeL").each(function () {
      var game = $(this).find("div.mobileTeamContainer > p").text().trim();
      var liga = $(this).find("div.gwKKIh").text().trim();
      if (liga.includes("CBLOL:")) {
        console.log(game);
      }
    });
  }
});
