import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import livro from "./model/Livros.js";

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
  console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexao com o banco feita com sucesso");
});

//----------------------
const app = express();
// middleware. Utilizado para ter acesso as respostas e requisições etc.
// vai servir para executar o express.jon para que todos os retornos do post
// retornem como json
app.use(express.json());
//----------------------

app.get("/", (req, res) => {
  res.status(200).send("Start node via express");
});

app.get("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);

  res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso!");
});

app.put("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);

  livros[index].titulo = req.body.titulo;

  res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  // deletar elemento [ index, quantidade]
  livros.splice(index, 1);
  res.status(200).send("Livro removido com sucesso!");
});

export default app;

//mongodb+srv://<db_username>:<db_password>@cluster0.7p0jsd2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
