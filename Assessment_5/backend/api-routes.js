let router = require('express').Router();
let MoviesController = require('./moviesController');

router.get('/',(req,res)=>{
    res.json({
        status: 'API is working',
        message:'MovieApp REST '
    })
})

router.route('/movies')
        .get(MoviesController.listAll)
        .post(MoviesController.create);

router.route('/movies/:id')
        .get(MoviesController.findById)      
        .delete(MoviesController.delete)
        

module.exports = router;