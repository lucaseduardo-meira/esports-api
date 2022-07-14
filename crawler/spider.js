const request = require("request");
const cheerio = require("cheerio");
const axios = require("axios");

const url = "https://maisesports.com.br/agenda/proximas/lol/";

axios(url).then((response) => {
  const html = response.data;
  const $ = cheerio.load(html);
  $(".sc-135bb3bf-2 sc-135bb3bf-3 gwKKIh bZUIzg", html).each(function () {
    console.log("text");
  });
});

// request(
//   "https://maisesports.com.br/agenda/proximas/lol/",
//   function (err, res, body) {
//     if (err) {
//       console.log("ERRO: " + err);
//     } else {
//       var $ = cheerio.load(body);
//       // TIMES DA LIGA CBLOL
//       $("a").each(function () {
//         var team = $(this).find(
//           ".sc-135bb3bf-2 sc-135bb3bf-3 gwKKIh bZUIzg span"
//         );
//         console.log(team);
//       });
//     }
//   }
//);
