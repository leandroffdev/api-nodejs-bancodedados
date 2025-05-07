/**
 * 
 * Metodos/Verbos HTTP
 * GET - Listar
 * POST - Criar
 * PUT - Editar Vários
 * PATCH - Editar Um
 * DELETE - Deletar
 * 
 * */

import express from "express";
import nodemon from "nodemon";

const app = express();
app.use(express.json())
// app.use(nodemon)

const users = [];

// POST
app.post("/usuarios", (req, res) => {
    const user = req.body;
    users.push(user);
    console.log(user);
    res.status(200).send(user);
});

app.get("/", (req, res) => {
    res.status(200).send("Pagina principal");
});

app.get("/usuarios", (req, res) => {
    let listaUsuarios = [
        { user: "Leandro", age: 37 },
        { user: "Isabelle", age: 31 },
        { user: "Alice", age: 7 },
        { user: "Eduardo", age: 22 },
        { user: "Williane", age: 19 },
    ]
    res.status(200).send(users);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
});


