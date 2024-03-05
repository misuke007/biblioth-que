const {Emprunt , Utilisateur , Reservation , Livre } = require('../models')
const {ajout , miseJour , supprimer , voirTout, voirUn , recherche} = require('./ContrBase')
const moment = require('moment')

Utilisateur.hasMany(Reservation)
<<<<<<< HEAD
=======
Livre.hasMany(Emprunt)
Emprunt.belongsTo(Livre)
>>>>>>> e1bb39d11cbbcc3baf91c50f51b86344086e5669
Reservation.belongsTo(Utilisateur)
Livre.hasMany(Reservation)
Reservation.belongsTo(Livre)
Utilisateur.hasMany(Emprunt)
Emprunt.belongsTo(Utilisateur)





exports.ajoutReservation = (req, res) => {

    const {date_recuperation , LivreId , UtilisateurId} = req.body

    // convertir la chaine en objet date 
    const dateDexpiration = new Date(date_recuperation)
    dateDexpiration.setUTCHours(17)
  
    ajout(req, res , Reservation , {date_recuperation : dateDexpiration , LivreId , UtilisateurId})

}


exports.validationEmprunt = async(req, res) => {

<<<<<<< HEAD
    const {UtilisateurId} = req.body
=======
    const {UtilisateurId , LivreId} = req.body
>>>>>>> e1bb39d11cbbcc3baf91c50f51b86344086e5669
    const [dureeEmprunt , dateEmprunt , ] = [14 , moment()]

    const dateRetour =  dateEmprunt.add(dureeEmprunt ,'days') 
    const dateRetourFormate =  dateRetour.format('YYYY-MM-DD')

<<<<<<< HEAD
    const dataReservation = await Reservation.findOne({include : [Utilisateur , Livre] , where:{UtilisateurId}})

    const newEmprunt = Emprunt.build({

        UtilisateurId,
        LivreId : dataReservation.LivreId,
=======
    const dataReservation = await Reservation.findOne({include : [Utilisateur , Livre] , where:{UtilisateurId , LivreId}})
    const newEmprunt = Emprunt.build({

        UtilisateurId,
        LivreId : LivreId,
>>>>>>> e1bb39d11cbbcc3baf91c50f51b86344086e5669
        date_retour_prevu : dateRetourFormate,
    })

    await newEmprunt.save()
<<<<<<< HEAD
    await Reservation.destroy({where:{LivreId : dataReservation.LivreId}})
=======
    await Reservation.destroy({where:{LivreId , UtilisateurId}})
>>>>>>> e1bb39d11cbbcc3baf91c50f51b86344086e5669
    return res.status(200).json({message : `Emprunt du livre ${dataReservation.Livre.titre} validé!`})

}



exports.rechercheReservation = (req, res) => {

    const {rech} = req.body
    recherche(req, res , Reservation , rech)

}



<<<<<<< HEAD
// exports.retourLIvre = async(req, res) => {

//     const {id} = req.body  

// }

exports.historique =  async(req, res)  => {

    const historique = await Emprunt.findAll()

    return res.status(200).json(historique)
=======
exports.rechercheEmprunt = (req, res) => {

    const {rech} = req.body
    recherche(req, res , Emprunt , rech)
}



exports.retourLivre = async(req, res) => {

    const {UtilisateurId , LivreId} = req.body
    const date_retour_actuelle = new Date()
    const dataEmprunt = await Emprunt.findOne({where:{UtilisateurId , LivreId}})
    const dataLivre = await Livre.findOne({where:{id : LivreId}})
    dataEmprunt.date_retour_actuelle = date_retour_actuelle
    dataLivre.exemplaire += 1 
    await dataEmprunt.save()
    await dataLivre.save()
    return res.status(200).json({message : 'retour validé!'})



>>>>>>> e1bb39d11cbbcc3baf91c50f51b86344086e5669
}

