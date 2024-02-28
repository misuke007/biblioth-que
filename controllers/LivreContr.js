
const {Livre , Categorie} = require('../models')
const {enregistrement} = require('../library/optionFichier')
const {ajout , miseJour , supprimer , voirTout, voirUn , recherche} = require('./ContrBase')
const {nouveauNom} = require('../library/optionFichier')
const fs = require('fs')
const constante = require('../constantes/constantes')


Categorie.hasOne(Livre)
Livre.belongsTo(Categorie)









exports.ajoutLivre = (req, res) => {

    const {titre  , auteur  ,  annee_publication, CategorieId , exemplaire} = req.body
    const {photo}  = req.files
    let couverture = nouveauNom(photo)
    enregistrement(photo , couverture)
    ajout(req , res , Livre , {titre  , auteur  ,  annee_publication ,couverture, CategorieId , exemplaire})

}



exports.supprimerLivre = async(req , res) => {

    const id = req.params.id
  
    
    const livre = await Livre.findOne({where:{id}})
    
    fs.unlink(`./public/couverture/${livre.couverture}` ,(error) => {
        if(error)console.log(error)})

    supprimer(req, res , Livre , id)

}



exports.miseJourLivre = async(req, res) => {

    const {titre  , auteur  ,  annee_publication, categorieId} = req.body
    const {photo}  = req.files
    const id = req.params.id

    const livre = await Livre.findOne({where:{id}})
    
    fs.unlink(`./public/couverture/${livre.couverture}` ,(error) => {
        if(error)console.log(error)})

    let couverture = nouveauNom(photo)
    enregistrement(photo , couverture)
    miseJour(req , res , Livre , {titre  , auteur  ,  annee_publication ,couverture, categorieId} , id)
}



exports.unLivre = (req , res) => {

    const id = req.params.id
    voirUn(req, res ,Livre ,  id)
}



exports.toutLivre = (req, res) => voirTout(req, res , Livre)



exports.rechercheLivre = (req, res) => {

    const {rech , colonne} = req.body
    recherche(req , res , Livre , rech , colonne)
}



exports.trierParCategorie = async (req, res) => {

    const CategorieId = req.params.categorieId

    try{
        
    let data = await Livre.findAll({where:{CategorieId}})
    return res.status(200).json({data})

    }catch(error){return res.status(200).json({error : constante.error500})}
}
