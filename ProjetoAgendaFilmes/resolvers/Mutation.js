const { assistidos, favoritos } = require('../data/db');

module.exports = {
    marcarComoAssistido(_, { usuarioId, serieFilmeId }) {
        if (!assistidos[usuarioId]) assistidos[usuarioId] = [];
        assistidos[usuarioId].push(serieFilmeId);
        return `Adicionado à lista de assistidos.`;
    },
    favoritar(_, { usuarioId, serieFilmeId }) {
        if (!favoritos[usuarioId]) favoritos[usuarioId] = [];
        favoritos[usuarioId].push(serieFilmeId);
        return `Favoritado com sucesso.`;
    }
};
