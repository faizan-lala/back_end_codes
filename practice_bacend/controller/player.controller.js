const { request, response } = require('express');
const playerModel = require('../model/player.model');

exports.Add = (request, response) => {
    playerModel.create({
        name: request.body.name,
        age: request.body.age,
        mobile: request.body.mobile
    }).then(result => {
        return response.status(200).json(result);
    }).catch(err => {
        console.log(err);
        return response.status(500).json({ message: 'Opps ! SomeThing went wrong' });

    })
}

exports.View = (request, response) => {
    playerModel.find().then(result => {
        return response.status(200).json(result);
    }).catch(err => {
        return response.status(500).json({ message: 'Opps ! SomeThing went wrong' });
    })
}

exports.Delete = (request, response) => {
    playerModel.deleteOne({ _id: request.params.id }).then(result => {
        return response.status(200).json(result);
    }).catch(err => {
        return response.status(500).json({ message: 'Opps ! SomeThing went wrong' });
    })
}

exports.Update = (request, response) => {
    playerModel.updateOne({ _id: request.params.id }, {
        $set: {
            name: request.body.name,
            age: request.body.age,
            mobile: request.body.mobile
        }
    }

    ).then(result => {
        return response.status(200).json(result);
    }).catch(err => {
        return response.status(500).json({ message: 'Opps ! SomeThing went wrong' });
    })
}

exports.Request = async(request, response) => {
    const detail = {
        teamId: request.body.teamId,
        tournamentId: request.body.tournamentId
    }
    const requestedPlayer = await playerModel.findOne({ _id: request.params.playerId })
    requestedPlayer.requested.push(detail);
    requestedPlayer.save().then(result => {
        playerModel.find().populate({requested:requested.teamId});
        return response.status(200).json(result)
    }).catch(error => {
        return response.status(500).json(error);
    })
}


exports.History = async(request, response) => {
    const historical = {
        tournamentId: request.body.tourId
    }
    const requestedPlayer = await playerModel.findOne({ _id: request.params.playerId })
    console.log(requestedPlayer)
    requestedPlayer.history.push(historical);
    requestedPlayer.save().then(result => {
        return response.status(200).json(result)
    }).catch(error => {
        return response.status(500).json(error);
    })
}


exports.viewList = (request, response) => {
    player.find().then(result => {
        console.log(result)
        return response.status(200).json(result)
    }).catch(error => {
        console.log(error)
        return response.status(500).json(error)
    })
}

exports.viewDetail = (request, response) => {
    player.findOne({ _id: request.params.pid }).populate("request.teamId").populate("request.tournamentId")
        .then(result => {
            console.log(result)
            return response.status(200).json(result)
        }).catch(error => {
            console.log(error)
            return response.status(500).json(error)
        })
}

exports.updateRecord = (request, response) => {
    player.updateOne({ _id: request.params.pid }, {
        $set: {
            pName: request.body.pName,
            age: request.body.age,
            mobile: request.body.mobile
        }
    }).then(result => {
        return response.status(200).json(result)
    }).catch(error => {
        return response.status(500).json(error)
    })
}

exports.remove = (request, response) => {
    player.deleteOne({ _id: request.params.pid }).then(result => {
        return response.status(200).json(result)
    }).catch(error => {
        return response.status(500).json(error)
    })
}
