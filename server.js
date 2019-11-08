const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// connection configuration
const connection = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: '',
     database: 'bincom_test'
})

connection.connect(err => {
    if(err){
        return err;
    }
})


//BodyParser Middleware 
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

// show the list of all polling unit from the annouced_pu_results
app.get('/individualPollUnit', (req, res) => {
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
                data: result
            })
        }
    })
});

app.get('/searchlga', (req, res) => {
    const name = req.params.name;
    const SELECT_LGA_QUERY = `SELECT lga_name, lga_id FROM lga `;

    connection.query(SELECT_LGA_QUERY,(err, lga) => {
        if(err) res.send(err)
        res.send(lga)
    })
});


// search and get a particular lga with their total 
app.get('/getTotal/:id', (req, res) => {
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
});

function calculateSum(value){
    if(value.length <1){
        return 0;
    }
    const Pvalues = value.map(({party_score}) => party_score)
    Ptotal = Pvalues.reduce((a,b) => a+b)
    return Ptotal;
}

 // add new polling unit
app.post('/add', (req, res) => {
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
});

// Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server started on port ${port}`))

