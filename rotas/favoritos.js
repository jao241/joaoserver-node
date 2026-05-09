import { Router } from "express";
import { HTTP_CREATED, HTTP_ERROR_STATUS, HTTP_NO_CONTENT } from "../httpStatusCodes.js";
import { favoritosControlador } from "../controladores/favoritosControlador.js";

const rota = new Router();
const controlador = new favoritosControlador();

rota.get("/", async (req, res) => {
    try {
        res.json(await controlador.getFavoritos());
    } catch (error) {
        res.status(HTTP_ERROR_STATUS).send(error.message);
    }
});

rota.get("/:id", async (req, res) => {
    try {
        res.json(await controlador.getFavorito(req.params.id));
    } catch (error) {
        res.status(HTTP_ERROR_STATUS).send(error.message);
    }
});

rota.post("/", async (req, res) => {
    try {
        await controlador.postFavorito(req.body);

        res.status(HTTP_CREATED).send();
    } catch (error) {
        res.status(HTTP_ERROR_STATUS).send(error.message);
    }
});

rota.patch("/:id", async (req, res) => {
    try {
        await controlador.patchFavorito(req.body, req.params.id);

        res.status(HTTP_NO_CONTENT).send();
    } catch (error) {
        res.status(HTTP_ERROR_STATUS).send(error.message);
    }
});

rota.delete("/:id", async (req, res) => {
    try {
        await controlador.deleteFavorito(req.params.id);

        res.status(HTTP_NO_CONTENT).send();
    } catch (error) {
        res.status(HTTP_ERROR_STATUS).send(error.message);
    }
});

export default rota;