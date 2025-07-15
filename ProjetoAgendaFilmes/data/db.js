const conteudo = [
    {
        id: '1',
        titulo: 'Stranger Things',
        tipo: 'Série',
        plataforma: 'Netflix',
        genero: ['Ficção Científica', 'Suspense'],
        lancamento: '2025-08-20',
        status: 'Em breve',
        url: 'https://netflix.com/strangerthings'
    },
    {
        id: '2',
        titulo: 'Duna: Parte 2',
        tipo: 'Filme',
        plataforma: 'Max',
        genero: ['Ficção Científica', 'Aventura'],
        lancamento: '2025-07-15',
        status: 'Lançado',
        url: 'https://www.max.com/dune-part-2'
    },
    {
        id: '3',
        titulo: 'The Boys',
        tipo: 'Série',
        plataforma: 'Prime Video',
        genero: ['Ação', 'Comédia', 'Super-herói'],
        lancamento: '2025-09-10',
        status: 'Em breve',
        url: 'https://www.primevideo.com/theboys'
    },
    {
        id: '4',
        titulo: 'Interestelar',
        tipo: 'Filme',
        plataforma: 'Netflix',
        genero: ['Ficção Científica', 'Drama'],
        lancamento: '2014-11-07',
        status: 'Lançado',
        url: 'https://www.netflix.com/interestelar'
    },
    {
        id: '5',
        titulo: 'Oppenheimer',
        tipo: 'Filme',
        plataforma: 'Prime Video',
        genero: ['Drama', 'Histórico'],
        lancamento: '2025-07-22',
        status: 'Em breve',
        url: 'https://www.primevideo.com/oppenheimer'
    },
    {
        id: '6',
        titulo: 'A Casa do Dragão',
        tipo: 'Série',
        plataforma: 'Max',
        genero: ['Fantasia', 'Drama'],
        lancamento: '2025-08-05',
        status: 'Em breve',
        url: 'https://www.max.com/houseofthedragon'
    }
];

const assistidos = {
    '1': ['2', '4'], // Usuário 1 já assistiu Duna: Parte 2 e Interestelar
    '2': ['1', '3']  // Usuário 2 já assistiu Stranger Things e The Boys
};

const favoritos = {
    '1': ['1', '3'], // Usuário 1 favoritou Stranger Things e The Boys
    '2': ['4', '5']  // Usuário 2 favoritou Interestelar e Oppenheimer
};

module.exports = { conteudo, assistidos, favoritos };