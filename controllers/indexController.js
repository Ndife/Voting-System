const connection = require("../config/dbconnect");
const {GET_LGA_QUERY, SELECT_ALL_POLLING_RESULT_QUERY, SELECT_POLLING_UNIT_QUERY} = require('./queries');

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
    const ADD_QUERY = 'INSERT into  ';
    connection.query(ADD_QUERY,(err, result) => {
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