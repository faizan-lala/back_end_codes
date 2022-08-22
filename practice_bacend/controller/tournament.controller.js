const tournaModel=require('../model/tounament.model')
exports.Add=(request,response)=>{
    tournaModel.create({
        name:request.body.name,
        start_date:request.body.start_date,
        end_date:request.body.end_date
    }).then(result=>{
        return response.status(200).json(result);
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({message:'Opps ! SomeThing went wrong'});
       
    })
}

exports.View=(request,response)=>{
    tournaModel.find().then(result=>{
        return response.status(200).json(result); 
    }).catch(err=>{
        return response.status(500).json({message:'Opps ! SomeThing went wrong'});
    })
}


exports.Delete = (request, response) => {
    tournaModel.deleteOne({ _id: request.params.id }).then(result => {
        return response.status(200).json(result);
    }).catch(err => {
        return response.status(500).json({ message: 'Opps ! SomeThing went wrong' });
    })
}

exports.Update = (request, response) => {
    tournaModel.updateOne({ _id: request.params.id }, {
        $set: {
            name:request.body.name,
            start_date:request.body.start_date,
            end_date:request.body.end_date

        }
    }

    ).then(result => {
        return response.status(200).json(result);
    }).catch(err => {
        return response.status(500).json({ message: 'Opps ! SomeThing went wrong' });
    })
}
