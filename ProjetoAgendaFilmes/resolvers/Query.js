const { conteudo, assistidos } = require('../data/db');

module.exports = {
    proximosLancamentos(_, { plataformas, generos }) {
        return conteudo.filter(item => {
            const filtroPlataforma = !plataformas || plataformas.includes(item.plataforma);
            const filtroGenero = !generos || generos.some(gen => item.genero.includes(gen));
            return item.status === 'Em breve' && filtroPlataforma && filtroGenero;
        });
    },
    continuarAssistindo(_, { usuarioId }) {
        const vistos = assistidos[usuarioId] || [];
        return conteudo.filter(item => !vistos.includes(item.id));
    }
};