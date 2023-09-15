//Quelques imports
import mongoose from "mongoose";

//1) Définir le schéma ~= La description d'un enregistrement
const schema = new mongoose.Schema
(
    {
        nickName:{type:String, required:true},
        date:    {type:Date, required:true},
        score:   {type:Number, required:true}  
    }
)
//2) Créer un modèle basé sur le schema
export default mongoose.model("Scores",schema,"Scores")
//Mongoose recherche automatiquement la version plurielle et minuscule du nom de votre modèle
// donc on ajoute le 3ème paramètre pour donner le nom EXACTE dans notre db