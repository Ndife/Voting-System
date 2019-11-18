const connection = require("../config/dbconnect");
var moment = require('moment');
const {GET_LGA_QUERY, SELECT_ALL_POLLING_RESULT_QUERY, SELECT_POLLING_UNIT_QUERY,
        CREATE_NEW_POLLING_UNIT, ADD_QUERY, SELECT_ALL_NEW_POLLING_QUERY, GET_PARTY_QUERY, GET_POLLING_ID_QUERY} = require('./queries');

exports.getLocalGovts = (req, res) => {
    connection.query(GET_LGA_QUERY, (err, lga) => {
        if(err) res.send(err);
        res.json(lga)
    });
}

// show the list of all polling unit from the annouced_pu_results
exports.getPollUnits = (req, res) => {
    connection.query(SELECT_ALL_POLLING_RESULT_QUERY,(err, result) => {
        if(err){
            return res.send(err)
        }else {
            return res.send({
                success: true,
                data: result
            })
        }
    })
};


function calculateSum(value){
    if(value.length <1){
        return 0;
    }
    const Pvalues = value.map(({party_score}) => party_score)
    Ptotal = Pvalues.reduce((a,b) => a+b)
    return Ptotal;
}

// search and get a particular lga with their total 
exports.totalVotes = (req, res) => {
    const lgaId = req.params.id;
    connection.query(SELECT_POLLING_UNIT_QUERY + lgaId, (err, result) => {
        if(err) res.send(err)
        total = calculateSum(result)
        res.send({
            data: result,
            total,
        })
    })
};

 // add new polling unit
exports.addNewPoll = (req, res) => {
    const {
        polling_unit_uniqueid,
        party_abbreviation,
        party_score,
        entered_by_user,
        user_ip_addresFull, 	
        user_ip_addres,
    } = req.body;
    let date_entered = moment().format('YYYY-MM-DD HH:mm');

    const ADD_NEW_POLL = ADD_QUERY +`( '${polling_unit_uniqueid}','${party_abbreviation}','${party_score}','${entered_by_user}','${date_entered}',
        '${user_ip_addresFull}', 	
       '${ user_ip_addres}'
       )`;

    connection.query(CREATE_NEW_POLLING_UNIT, (error, data) => {
        if(data){
            connection.query(ADD_NEW_POLL,(err, result) => {
                if(err){
                    return res.send(err)
                }else {
                    return res.json({
                        success: true,
                        data: result
                    })
                }
            })
        }else {
            res.send(error)
        }
    })
};


exports.getNewPollUnits = (req, res) => {
    connection.query(SELECT_ALL_NEW_POLLING_QUERY,(err, result) => {
        if(err){
            return res.send(err)
        }else {
            return res.send({
                success: true,
                data: result
            })
        }
    })
};

exports.getParty = (req,res) => {
    connection.query(GET_PARTY_QUERY, (err, result) => {
        if(err) throw err;
        return res.send({
            success: true,
            data: result
        })
    })
}


exports.getPollingId = (req,res) => {
    connection.query(GET_POLLING_ID_QUERY, (err,result) => {
        if(err) throw err;
        res.json({
            success: true,
            data: result
        })
    })
}