const express = require('express')
const router = express.Router()

const {
    ajoutLivre,
    supprimerLivre,
    miseJourLivre, 
    toutLivre,
    unLivre ,
    rechercheLivre ,
    trierParCategorie} = require('../controllers/LivreContr')





router.post('/livre/ajout' ,ajoutLivre )
router.post('/livre/recherche' ,rechercheLivre )
router.put('/livre/miseJour/:id' ,miseJourLivre )
router.delete('/livre/supprimer/:id' , supprimerLivre)
router.get('/livre/tout' , toutLivre)
router.get('/livre/un/:id' , unLivre)
router.get('/livre/triParCategorie/:categorieId' , trierParCategorie)





module.exports = router

