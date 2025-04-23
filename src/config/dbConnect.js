import mongoose from "mongoose";

async function conectaNaDataBase() {
  mongoose.connect(process.env.DB_CONNECTION_STRING);
  return mongoose.connection;
}

export default conectaNaDataBase;

//mongodb+srv://<db_username>:<db_password>@cluster0.7p0jsd2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
