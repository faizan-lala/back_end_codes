const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const tournamentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    start_date:{
        type:Date,
        required:true
    },
    end_date:{
        type:Date,
        required:true
    },
    date: {
        type: Date,
        default: Date.now()
    }  
});

module.exports=mongoose.model('tournaments',tournamentSchema);