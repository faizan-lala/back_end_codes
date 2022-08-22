const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const playerRoute=require('./routes/player.route');
const teamRoute=require('./routes/team.route');
const tournaRoute=require('./routes/tournament.route')
const port = process.env.PORT || 3000;
const app = express();
const cors = require("cors");
app.use(cors());


mongoose.connect("mongodb+srv://faizankhan:786786@cluster0.5nhsv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(()=>{
    console.log("Database connected sucessfully");
}).catch(err=>{
    console.log(err);
});

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("./public"));
 
app.use('/player',playerRoute);
app.use('/team',teamRoute);
app.use('/tournament',tournaRoute);


app.listen(port,()=>{
    console.log("Server is running or port : " + port);
});