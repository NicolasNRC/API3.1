import Mongoose from "mongoose";

const mongo_uri = "mongodb+srv://NicolasNRC:BatatinhaFrita123@cluster0.pdjfbfd.mongodb.net/bancoqualquer?appName=colecaoqualquer";

export default async function connectDatabase(){
    await Mongoose.connect(mongo_uri);
    console.log("Conexão com o MongoDb realizada com sucesso.")
}





// User: NicolasNRC ; Password: BatatinhaFrita123