const { Utilisateur} = require('../models')
const {ajout , miseJour , supprimer , voirTout, voirUn } = require('./ContrBase')
const {nouveauNom, enregistrement} = require('../library/optionFichier')
const genereMdp = require('../library/creationMdp')
const bcrypt = require('bcryptjs')
const fs= require('fs')



exports.ajoutAdmin = (req, res) => {

    const {nom , prenom , email } = req.body
    const {photo} = req.files
    const mot_de_passe = 'ADMIN-'+genereMdp()
    const passCrypte = bcrypt.hashSync(mot_de_passe, 12)
    const couverture = nouveauNom(photo)
    enregistrement(photo , couverture)
    ajout(req, res , Utilisateur , {nom , prenom , email , mot_de_passe : passCrypte , badge : "ADMIN" , photo : couverture} , mot_de_passe )
}



exports.modifAdmin = async(req, res) => {

    const {nom , prenom , email } = req.body
    const {photo} = req.files
    const id = req.params.id
    

    try{

        const utilisateur = await Utilisateur.findOne({where:{id}})

        fs.unlink(`./public/couverture/${utilisateur.photo}` ,(error) => {
            if(error)console.log(error)})

            const couverture = nouveauNom(photo)
            enregistrement(photo , couverture)
            miseJour(req, res , Utilisateur , {nom , prenom , email , photo : couverture } , id)


    }catch(error){console.log(error)}
}



exports.suppprimerUtilisateur = async(req, res) => {

    const id = req.params.id

    try{

        const utilisateur = await Utilisateur.findOne({where:{id}})

        fs.unlink(`./public/couverture/${utilisateur.photo}` ,(error) => {
            if(error)console.log(error)})
        
         supprimer(req , res , Utilisateur , id )

    }catch(error){console.log(error)}

}







exports.voirToutMembre = (req, res) => {voirTout(req, res , Utilisateur , badge = 'membre')}

exports.voirToutAdmin = (req, res) => {voirTout(req, res , Utilisateur , badge = 'ADMIN')}


exports.voirUnMembre = (req, res) => {voirUn(req, res , Utilisateur , id = req.params.id , badge = 'membre')}

exports.voirUnAdmin = (req, res) => {voirUn(req, res , Utilisateur , id = req.params.id , badge = 'ADMIN')}
