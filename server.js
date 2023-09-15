import Express from 'express'
import router from './config/route.js'
import bodyParser from "body-parser"
/*Créer une instance de type constante de Express */
const app=Express()

//Parser de body ==> le body est "parsé" en json
app.use(bodyParser.json()); 

//Routes
app.use("/", router);

//Permet d'accepter le json par express
app.use(Express.json());

app.listen(3000, ()=>{ console.log("L'application écoute sur l'adresse http://localhost:3000")  })