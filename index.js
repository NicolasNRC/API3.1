import express from "express"
import connectDatabase from "./config/mongo.config.js";

const app = express ();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req,res)=>{
    res.send("certo")
})

app.get("/nome/:nome", (req,res)=>{
const {nome} = req.params
    res.send(`Seja Bem Vindo ${nome}`)

})

// Boa tarde
async function startServer() {
    try {
        await connectDatabase();
        app.listen(3000, () => {
            console.log("apirodando")
        });
    } catch (error) {
        console.error("Erro ao iniciar a aplicação:", error.message);
    };
};

startServer();