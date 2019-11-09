const connection = require("../config/dbconnect");

exports.getLocalGovts = (req, res) => {
    const SELECT_LGA_QUERY = `SELECT lga_name, lga_id FROM lga `;

    connection.query(SELECT_LGA_QUERY,(err, lga) => {
        if(err) res.send(err);
        res.json(lga)
    });
}

// show the list of all polling unit from the annouced_pu_results
exports.getPollUnits = (req, res) => {
    const SELECT_ALL_POLLING_RESULT_QUERY = `
    SELECT
    a.result_id, 
    a.polling_unit_uniqueid,
    a.party_abbreviation, 
    a.party_score,
    p.polling_unit_name,
    p.polling_unit_number

    FROM 
    announced_pu_results a
    INNER JOIN polling_unit p`;

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
    const SELECT_POLLING_UNIT_QUERY = `
    SELECT 
    a.polling_unit_uniqueid, 
    a.party_abbreviation,
    a.party_score,
    a.result_id,
    p.lga_id,
    p.uniqueid, 
    p.polling_unit_number

    FROM
    announced_pu_results a
    INNER JOIN polling_unit p 
    ON p.uniqueid = a.polling_unit_uniqueid
    WHERE
    p.lga_id = ${lgaId} `;
   
    connection.query(SELECT_POLLING_UNIT_QUERY,(err, result) => {
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