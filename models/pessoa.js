import Mongoose from "mongoose";

const pessoaSchema = new Mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    tel: {
        type: String,
        required: true,
        trim: true
    }

},{
    versionKey: false
});

export default Mongoose.model("Pessoa", pessoaSchema, "colecaoqalquer");