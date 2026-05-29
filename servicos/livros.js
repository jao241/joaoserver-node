import fs from "fs";

import livro from "../models/livros.js";

export class livros {
    async getTodosLivros() {
        return await livro.find();
    }

    async getLivro(id) {
        return await livro.findById(id);
    }

    async postLivro(novoLivro) {
        await livro.create(novoLivro);
    }

    async updateLivro(novoDadoLivro, id) {
        await livro.findByIdAndUpdate(id, novoDadoLivro);
    }

    async deleteLivro(id) {
        return await livro.findByIdAndDelete(id);
    }
}