
const { Reservation , Livre } = require('../models')
const { Op } = require('sequelize')


// cette fonction permet de vérifier si une réservation est obsolète ou non. si oui => la reservation sera supprimer


const resaObsolete = async () => {

    const dataReservation = await Reservation.findAll({ where: { date_recuperation: { [Op.lt]: new Date } } })
    let dataLivre

    if (dataReservation.length != 0) {

        for (item of dataReservation) {

            await Reservation.destroy({ where: { id: item.id } })
            dataLivre = await Livre.findOne({ where: { id: item.LivreId } })
            dataLivre.exemplaire += 1
            await dataLivre.save()
        }

    }

}

module.exports = resaObsolete

