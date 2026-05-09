import { Router } from "express";
import { livroControlador } from "../controladores/livroControlador.js";
import { HTTP_CREATED, HTTP_ERROR_STATUS, HTTP_NO_CONTENT } from "../httpStatusCodes.js";

const router = Router();
const controlador = new livroControlador();

router.get("/", async (req, res) => {
    try {
        const livros = await controlador.getLivros();

        res.json(livros);
    } catch (error) {
        res.status(HTTP_ERROR_STATUS).send(error.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const livro = await controlador.getLivro(req.params.id);

        res.json(livro);
    } catch (error) {
        res.status(HTTP_ERROR_STATUS).send(error.message);
    }
});

router.post("/", async (req, res) => {
    try {
        await controlador.postLivro(req.body);

        res.status(HTTP_CREATED).send();
    } catch (error) {
        res.status(HTTP_ERROR_STATUS).send(error.message);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        await controlador.updateLivro(req.body, req.params.id);

        res.status(HTTP_NO_CONTENT).send();
    } catch (error) {
        res.status(HTTP_ERROR_STATUS).send(error.message);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await controlador.deleteLivro(req.params.id);

        res.status(HTTP_NO_CONTENT).send();
    } catch (error) {
        res.status(HTTP_ERROR_STATUS).send(error.message);
    }
});

export default router;