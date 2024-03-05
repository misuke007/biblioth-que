const express = require('express')
const router = express.Router()


const { 

    ajoutAdmin , 
    modifAdmin,
    suppprimerUtilisateur,
    voirToutMembre,
    voirToutAdmin,
    voirUnMembre,
<<<<<<< HEAD
    voirUnAdmin, 
    paiementMembre} = require('../controllers/AdminContr')
=======
    voirUnAdmin } = require('../controllers/AdminContr')
>>>>>>> e1bb39d11cbbcc3baf91c50f51b86344086e5669






router.get('/toutAdmin' , voirToutAdmin)
router.get('/toutMembre' , voirToutMembre)
router.get('/unMembre/:id' , voirUnMembre)
router.get('/unAdmin/:id' , voirUnAdmin)
router.post('/ajoutAdmin' ,ajoutAdmin )
router.put('/miseJourAdmin/:id' ,modifAdmin )
router.delete('/supprimerUtilisateur/:id' , suppprimerUtilisateur)
<<<<<<< HEAD
router.post('/paiementMembre/:id' , paiementMembre)
=======
>>>>>>> e1bb39d11cbbcc3baf91c50f51b86344086e5669

module.exports = router