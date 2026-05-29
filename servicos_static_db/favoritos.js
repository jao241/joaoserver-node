import fs from "fs";

export class favoritos {
    db = "db/favoritos.json";

    async getFavoritos() {
        return await JSON.parse(fs.readFileSync(this.db));
    }

    async getFavorito(id) {
        const favoritos = await this.getFavoritos();

        return favoritos.filter((favorito) => favorito.id == id);
    }

    async postFavorito(favorito) {
        const favoritos = await this.getFavoritos();

        fs.writeFileSync(this.db, JSON.stringify([...favoritos, favorito]));
    }

    async patchFavorito(favorito, id) {
        const favoritos = await this.getFavoritos();

        const indexFavorito = favoritos.findIndex((valor) => valor.id == id);

        const favoritoModificado = {
            ...favoritos[indexFavorito],
            ...favorito
        };

        favoritos[indexFavorito] = favoritoModificado;

        fs.writeFileSync(this.db, JSON.stringify(favoritos));
    }

    async deleteFavorito(id) {
        const favoritos = await this.getFavoritos();
        
        console.log(favoritos);

        const favoritosFiltrado = favoritos.filter((favorito) => {
            if (!favorito || favorito.id != id) {
                return favorito;
            }
        });

        console.log(favoritosFiltrado);
        

        fs.writeFileSync(this.db, JSON.stringify(favoritosFiltrado));
    }
}