const express = require('express')
const securiteCb = require('../config/securiteCb')
const router = express.Router()

const { 
    
    enregistrementMembre, 
    verificationCarte, 
    validationPaiement, 
<<<<<<< HEAD
    login, 
    } = require('../controllers/AuthContr')
=======
    login } = require('../controllers/AuthContr')





>>>>>>> e1bb39d11cbbcc3baf91c50f51b86344086e5669

router.post('/inscription' , enregistrementMembre)
router.post('/verificationValiditeCarte' ,  securiteCb , verificationCarte)
router.post('/paiement' , securiteCb , validationPaiement)
router.post('/login' , login)


<<<<<<< HEAD

=======
>>>>>>> e1bb39d11cbbcc3baf91c50f51b86344086e5669
module.exports = router