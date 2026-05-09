import { favoritos } from "../servicos/favoritos.js";

const favoritosService = new favoritos();

export class favoritosControlador {
    async getFavoritos() {
        return await favoritosService.getFavoritos();
    }

    async getFavorito(id) {
        if (id && Number(id)) {
            return await favoritosService.getFavorito(id);
        }

        return {
            error: true,
            message: "Id inválido"
        };
    }

    async postFavorito(favorito) {
        await favoritosService.postFavorito(favorito);
    }

    async patchFavorito(favorito, id) {
        if (id && Number(id)) {
            await favoritosService.patchFavorito(favorito, id);
        }

        return {
            error: true,
            message: "Id inválido"
        };
    }

    async deleteFavorito(id) {
        if (id && Number(id)) {
            await favoritosService.deleteFavorito(id);
        }

        return {
            error: true,
            message: "Id inválido"
        };
    }
}