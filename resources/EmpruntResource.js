const express = require('express')
const router = express.Router()
<<<<<<< HEAD
const {ajoutReservation, validationEmprunt, rechercheReservation, historique} = require('../controllers/EmpruntContr')
=======
const {ajoutReservation, validationEmprunt, rechercheReservation, retourLivre, rechercheEmprunt} = require('../controllers/EmpruntContr')
>>>>>>> e1bb39d11cbbcc3baf91c50f51b86344086e5669


router.post('/ajoutReservation' , ajoutReservation)
router.post('/validationEmprunt' , validationEmprunt)
router.post('/rechercheResa' , rechercheReservation)
<<<<<<< HEAD
router.get('/historique' , historique)


module.exports = router
=======
router.post('/retourLivre' , retourLivre)
router.post('/rechercheEmprunt' , rechercheEmprunt)

module.exports = router

>>>>>>> e1bb39d11cbbcc3baf91c50f51b86344086e5669
