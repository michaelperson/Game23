//importer l 'ODM ==> mongoose
import mongoose from 'mongoose'
import scores from '../models/Scores.model.js'
//Définir les options de connexion (connectionstring, topology,...)
const connectionstring = "mongodb://127.0.0.1:27017/Game"
//Connexion
mongoose.connect(connectionstring).then(()=>console.log("Mongodb connected"))
mongoose.Promise= global.Promise //me permettre de gérer la promess générée par mongo ailleur
//Définir une constante regroupant les schémas que je veux associer à mongo
const db = {
    Scores: scores
     
}
//exporter le module pour pouvoir l'utiliser dans mes autres classes
export default db