import express from "express";
import livroRota from "./rotas/livros.js";
import favoritoRota from "./rotas/favoritos.js";
import { dbConnection } from "./config/db/dbConnection.js";

const port = 8000;
const app = express();
const db = new dbConnection();

app.use(express.json());

app.get("/", (req, res) => {
    try {
        throw new Error("Falha na iniciação da api");
        res.send("Olá mundo");
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.mensage);
    }
});

app.use("/livros", livroRota);
app.use("/favoritos", favoritoRota);

try {
    const conexao = await db.pool();
    console.log('Banco conectado.');

    app.listen(port, () => {
        console.log(`Servidor rodando no endereço: localhost:${port}`);
    });
} catch (error) {
    console.error('Erro ao conectar: ', error);
}