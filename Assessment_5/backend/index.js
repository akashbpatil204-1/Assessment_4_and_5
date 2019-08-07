


let express = require('express');//include pkg lije
let apiRoutes = require('./api-routes');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let cors1 = require('cors');
let app = express();
let port = process.env.PORT ||4000;
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(cors1())
mongoose.connect('mongodb://localhost/resthub',{useNewUrlParser: true});
var db = mongoose.connection;

if(!db){
    console.log("Error connecting db");
}
else{
    console.log("Succesfully connected");
}


console.log(db);
app.get('/',(req,res)=>{
    res.send(JSON.stringify({messsage:'Hello world '}))
});

app.use('/',apiRoutes);
app.use('/movies',apiRoutes);
app.listen(port, ()=>{
    console.log('Server started....');
})  
