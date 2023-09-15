import Express from 'express'
import db from '../tools/db.js' // permet d'importer notre config de db
const router= Express.Router() //Permet de faire en sorte que ça soit ce fichier qui gère les routes

//Route exemple
router.get("/hello", (req, res)=>{ 
    
    console.log("Bonjour tout le monde")
    res.send("Hello le monde!")//Permet d'envoyer une réponse via l'http ==> Affichage dans la page web
})

router.get("/Scores",  async  (req,res)=>
{ 
    const lesScrores = await   db.Scores.find()
    res.json(lesScrores)
});

// :nom_param => permet de définir le nom dans la requête du segment pour récupérer la valeur
router.get("/Scores/:nickName",  async  (req,res)=>
{  
    const lesScrores = await   db.Scores.find({"nickName":req.params.nickName});
    res.json(lesScrores)
});

router.post("/Scores", async (req, res) => 
{
    console.log(req.body);
    const leScoreASauver= new db.Scores(
        {
            nickName:req.body.nickName,
            date: req.body.date,
            score: req.body.score
        }
    )
    await leScoreASauver.save();
    res.json(leScoreASauver); //Si vous voulez être puriste, vous devez renvoyer un code 204 + dans le header un lien vers le endpoint permettant de récupérer la ressource créée
})

  
export default router