const express = require('express')
const router = express.Router()
const {ajoutReservation, validationEmprunt, rechercheReservation, retourLivre, rechercheEmprunt} = require('../controllers/EmpruntContr')


router.post('/ajoutReservation' , ajoutReservation)
router.post('/validationEmprunt' , validationEmprunt)
router.post('/rechercheResa' , rechercheReservation)
router.post('/retourLivre' , retourLivre)
router.post('/rechercheEmprunt' , rechercheEmprunt)

module.exports = router

