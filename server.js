import { fastify } from "fastify";

const server = fastify();
const PORT =  3333;

server.get('/video', (req,res) => {
    res.send("Obter tudo");
})

server.post('/video', (req,res) => {
    res.send("Criar");
})

server.put('/video/:id', (req,res) => {
    res.send("Alterar");
})

server.delete('/video/:id', (req,res) => {
    res.send("Deletar");
})

server.listen({
    port: PORT,
});