
let Movie = require('./MovieModel');


exports.create = function(req,res){
  

    console.log("came inside create method");
    let movie = new Movie();
    movie.name = req.body.name;
    movie.save(function(err){
        res.json({
            status:'Succesfully saved',
            data:movie
        })
    })

   
}




exports.listAll = function(req,res){   
     console.log("came inside list all  method");
Movie.find(function (err, movie) {
       
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: movie
        });
    });
  

}   


exports.delete = function (req, res) {
    
    Movie.findByIdAndRemove(req.params.id, function (err, movie) {
        console.log("delete1");
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Movie deleted'
        });
    });
};


exports.findById = function(req,res){   
        Movie.findById(req.params.id, function (err, movie) {
            
            if (err)
                res.send(err);
            res.json({
                message: 'Movie details loading..',
                data: movie
            });
        });
    };

  
