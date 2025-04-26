import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
  console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexao com o banco feita com sucesso");
});

//----------------------
const app = express();
routes(app); // enviando a instancia do expreess

// middleware. Utilizado para ter acesso as respostas e requisições etc.
// vai servir para executar o express.jon para que todos os retornos do post
// retornem como json
//app.use(express.json());
//----------------------

export default app;

//mongodb+srv://<db_username>:<db_password>@cluster0.7p0jsd2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
