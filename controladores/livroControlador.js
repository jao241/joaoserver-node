import { livros } from "../servicos/livros.js";

const livroService = new livros();

export class livroControlador {
    async getLivros() {
        const livros = await livroService.getTodosLivros();

        return livros;
    }

    async getLivro(id) {
        if (id && Number(id)) {
            const livro = await livroService.getLivro(id);

            return livro;
        } else {
            return {
                error: true,
                message: "Id inválido"
            };
        }
    }

    async postLivro(livro) {
        await livroService.postLivro(livro);
    }

    async updateLivro(livroModificacao, id) {
        if (id && Number(id)) {
            await livroService.updateLivro(livroModificacao, id);
        } else {
            return {
                error: true,
                message: "Id inválido"
            };
        }
    }

    async deleteLivro(id) {
        if (id && Number(id)) {
            await livroService.deleteLivro(id);
        } else {
            return {
                error: true,
                message: "Id inválido"
            };
        }
    }
}

