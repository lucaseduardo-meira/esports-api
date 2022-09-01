const express = require("express");
const nextgameslol = require("./crawler/nextgamesLol");
const prevgameslol = require("./crawler/prevgamesLol");
const cs = require("./crawler/csgo");

const app = express();

app.get("/", (req, res) => {
  return res.send("ok");
});

app.get("/antigas/lol", (req, res) => {
  prevgameslol(req, res);
});

app.get("/proximas/lol", (req, res) => {
  nextgameslol(req, res);
});

app.get("/antigas/csgo", (req, res) => {
  cs.prevgamescsgo(req, res);
});

app.get("/proximas/csgo", (req, res) => {
  cs.nextgamescsgo(req, res);
});

app.get("/antigas/valorant", (req, res) => {
  prevgameslol(req, res);
});

app.get("/proximas/valorant", (req, res) => {
  nextgameslol(req, res);
});

app.get("/antigas/r6", (req, res) => {
  prevgameslol(req, res);
});

app.get("/proximas/r6", (req, res) => {
  nextgameslol(req, res);
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost/3000")
);
