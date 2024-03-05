
const {Reservation} = require('../models')
const { Op } = require('sequelize')

// cette fonction permet de vérifier si une réservation est obsolète ou non. si oui => la reservation sera supprimer


const resaObsolete = async() =>{

<<<<<<< HEAD
    const data = await Reservation.findAll({where:{date_recuperation : {[Op.lt] : new Date}}}) 

    if(data.length != 0){

        for(item of data){ await Reservation.destroy({where:{id : item.id}})}
=======
    const data = await Reservation.findAll({where:{date_recuperation : {[Op.lt] : new Date}}})

    if(data.length != 0){

        for(item of data){ 

            await Reservation.destroy({where:{id : item.id}})
        }
>>>>>>> e1bb39d11cbbcc3baf91c50f51b86344086e5669

    }

}

module.exports = resaObsolete

