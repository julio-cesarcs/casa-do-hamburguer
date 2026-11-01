import express from "express";
import { connection } from "./src/db.js";

const app = express();
connection();

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

app.get("/", (req, res) => {
  res.json("Voce acessou a rota inicial");
});
