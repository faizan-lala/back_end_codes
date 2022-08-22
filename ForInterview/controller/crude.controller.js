const { request, response } = require("express");
const model=require('../model/crud.model');
exports.Create=(request,response)=>{
    console.log(request.body);
     
    model.create({
         name:request.body.name,
         age:request.body.age,
         mobile:request.body.mobile
     }).then((result)=>{
         return response.status(200).json({result:result});
     }).catch(err=>{
         return response.status(500).json('Opps ! Something went wrong');
     })
}

exports.View=(request,response)=>{
    model.find().then(result=>{
        return response.status(200).json({result:result});
    }).catch(err=>{
        return response.status(500).json({err:'Opps ! Something went wrong'});
});
}

exports.Delete=(request,response)=>{
    model.deleteOne({_id:request.params.id}).then(result=>{
        if(result.deletedCount){
            return response.status(202).json({msg:'delete Successful'});
        }
        else{
            return response.status(204).json({msg:'not delete'});
        }
    }).catch(err=>{
        return response.status(500).json({err:'Something went wrong'});
    });
}

exports.Update=(request,response)=>{
    model.updateOne({_id:request.params.id },
        {
      $set:{
              name:request.body.name,
              age:request.body.age,
              mobile:request.body.mobile
          }
    }).then(result=>{
        if(result.modifiedCount){
            return response.status(202).json({msg:'updated Successfully'});
        }
        else{
            return response.status(204).json({msg:'not updated'});
        }
    }).catch(err=>{
        return response.status(500).json({err:'Something went wrong'});
    });
    }

    exports.Search= async(request,response)=>{
       let data=await model.find({
         "$or":[
                {name: {$regex:request.params.key}},
                {age: {$regex:request.params.key}},
                {mobile: {$regex:request.params.key}},
         ]
        })
        response.send(data);
    }