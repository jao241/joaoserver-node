import fs from "fs";

export class livros {
    db = "db/livros.json";

    async getTodosLivros() {
        return await JSON.parse(fs.readFileSync(this.db));
    }

    async getLivro(id) {
        const livros = await this.getTodosLivros();

        return livros.find((valor) => valor.id == id);
    }

    async postLivro(novoLivro) {
        const livros = await this.getTodosLivros();

        fs.writeFileSync(this.db, JSON.stringify([...livros, novoLivro]));
    }

    async updateLivro(novoDadoLivro, id) {
        const livros = await this.getTodosLivros();

        const indiceModificado = livros.findIndex((livro) => livro.id == id);

        const conteudoMudaddo = {
            ...livros[indiceModificado], ...novoDadoLivro
        };

        livros[indiceModificado] = conteudoMudaddo;

        fs.writeFileSync(this.db, JSON.stringify(livros));
    }

    async deleteLivro(id) {
        let livros = await this.getTodosLivros();

        livros = livros.filter((livro) => {
            if (!livro || livro.id != id) {
                return livro;
            }
        });
        
        fs.writeFileSync(this.db, JSON.stringify(livros));
    }
}