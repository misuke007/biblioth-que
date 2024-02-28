const {Emprunt} = require('../models')
const {Op} = require('sequelize')



const calculAmende = async () => {

    const dataEmprunt = await Emprunt.findAll({where:{date_retour_prevu:{[Op.lt] : new Date}}})

    if(dataEmprunt.length !== 0){

        for(item of dataEmprunt){

            item.frais_de_retard += 3000
            await item.save() 
        }
    }
}


module.exports = calculAmende