const teamModel=require('../model/team.model')
const { request, response } = require('express');

exports.Add=(request,response)=>{
    teamModel.create({
        name:request.body.name,
        playerId:request.body.playerId,
        toatalPlayer:request.body.toatalPlayer
    }).then(result=>{
        return response.status(200).json(result);
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({message:'Opps ! SomeThing went wrong'});
       
    })
}

exports.View=(request,response)=>{
    teamModel.find().then(result=>{
        return response.status(200).json(result); 
    }).catch(err=>{
        return response.status(500).json({message:'Opps ! SomeThing went wrong'});
    })
}


exports.Delete = (request, response) => {
    teamModel.deleteOne({ _id: request.params.id }).then(result => {
        return response.status(200).json(result);
    }).catch(err => {
        return response.status(500).json({ message: 'Opps ! SomeThing went wrong' });
    })
}

exports.Update = (request, response) => {
    teamModel.updateOne({ _id: request.params.id }, {
        $set: {
            name: request.body.name,
           playerId:request.body.playerId,
           toatalPlayer:request.body.toatalPlayer

        }
    }

    ).then(result => {
        return response.status(200).json(result);
    }).catch(err => {
        return response.status(500).json({ message: 'Opps ! SomeThing went wrong' });
    })
}
