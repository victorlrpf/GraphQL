const { ApolloServer, gql } = require("apollo-server")

const typeDefs = gql`
    type Usuario {
        id: ID
        nome: String!
        emai: String!
        idade: Int
        salario: Float
        vip: Boolean
    }

    # Pontos de entrada da API   
    type Query {
        ola: String
        horaCerta: String
        horaAtual: String
        usuarioLogado: Usuario
    }
`

const resolvers = {
    Query: {
        ola(){
            return "Olá mundo!"
        },
        horaCerta(){
            let hora = new Date.toString();
            return hora
        },
        horaAtual(){
            return `${new Date}`
        },
        usuarioLogado() {
            return {
                id: 1,
                nome: "Victor Luis",
                email: "victorlrpf@gmail.com",
                idade: 22,
                salario: 3500,
                vip: true
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executtando em ${url}`)
})