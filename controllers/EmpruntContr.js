const {Emprunt , Utilisateur , Reservation , Livre } = require('../models')
const {ajout , miseJour , supprimer , voirTout, voirUn , recherche} = require('./ContrBase')
const moment = require('moment')

Utilisateur.hasMany(Reservation)
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

    const {UtilisateurId} = req.body
    const [dureeEmprunt , dateEmprunt , ] = [14 , moment()]

    const dateRetour =  dateEmprunt.add(dureeEmprunt ,'days') 
    const dateRetourFormate =  dateRetour.format('YYYY-MM-DD')

    const dataReservation = await Reservation.findOne({include : [Utilisateur , Livre] , where:{UtilisateurId}})

    const newEmprunt = Emprunt.build({

        UtilisateurId,
        LivreId : dataReservation.LivreId,
        date_retour_prevu : dateRetourFormate,
    })

    await newEmprunt.save()
    await Reservation.destroy({where:{LivreId : dataReservation.LivreId}})
    return res.status(200).json({message : `Emprunt du livre ${dataReservation.Livre.titre} validé!`})

}



exports.rechercheReservation = (req, res) => {

    const {rech} = req.body
    recherche(req, res , Reservation , rech)

}



// exports.retourLIvre = async(req, res) => {

//     const {id} = req.body  

// }

exports.historique =  async(req, res)  => {

    const historique = await Emprunt.findAll()

    return res.status(200).json(historique)
}

