import express from "express";
import { connection } from "./src/db.js";

const app = express();
connection()

app.get("/", (req, res) => {
//   console.log("Resposta");
// res.json("Você acessou a rota inicial")
res.json({xxt: "Pl"})
});

app.listen(3000, () => {
  console.log(`Servidor rodando na porta 3000...`);
});


