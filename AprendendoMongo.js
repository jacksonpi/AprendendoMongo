const mongoose = require("mongoose")

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/aprendendo").then(()=>{
    console.log("MongoDb Conectado!")
}).catch((erro)=>{
console.log("Houve um erro ao se conectar ao MongoDb:"+erro)
})



//Model - Usuarios

const UserSchema = mongoose.Schema({
    nome:{
        type: String,
        require:false  //não obrigatorio
    },
    sobrenome:{
        type:String
    },
    email:{
        type:String
    },
    idade:{
        type: Number
    },
    pais:{
        type:String
    }

})

mongoose.model('usuarios',UserSchema)

const jackson = mongoose.model('usuarios')

new jackson ({
    nome:"Jackson",
    sobrenome:"Matias dos Santos Lima",
    email:"jacksonpihk@gmail.com",
    idade:29,
    pais:"Brasil"
}).save().then(()=>{
  console.log("Usuario criado!")
}).catch((erro)=>{
    console.log("Ouve um erro"+erro)
})