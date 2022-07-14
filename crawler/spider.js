const request = require("request");
const cheerio = require("cheerio");
const axios = require("axios");

const url = "https://maisesports.com.br/agenda/proximas/lol/";

request(
  "https://maisesports.com.br/agenda/proximas/lol/",
  function (err, res, body) {
    if (err) {
      console.log("ERRO: " + err);
    } else {
      var $ = cheerio.load(body);
      // TIMES DA LIGA CBLOL
      $("a").each(function () {
        var team = $(this).text().trim();
        console.log("jogo");
      });
    }
  }
);
