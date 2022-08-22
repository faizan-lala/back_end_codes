const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const teamSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
     playerId:
         {
         type:Schema.Types.ObjectId,
     }
     ,
    toatalPlayer:{
      type:Number,
      default:0,
      max:11
    },
    date: {
        type: Date,
        default: Date.now()
    }

    
});

module.exports=mongoose.model('teams',teamSchema);