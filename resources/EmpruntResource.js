const express = require('express')
const router = express.Router()
const {ajoutReservation, validationEmprunt, rechercheReservation} = require('../controllers/EmpruntContr')


router.post('/ajoutReservation' , ajoutReservation)
router.post('/validationEmprunt' , validationEmprunt)
router.post('/rechercheResa' , rechercheReservation)


module.exports = router