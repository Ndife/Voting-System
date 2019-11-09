function calculateSum(value){
    const Pvalues = value.map(({party_score}) => party_score)
    total = Pvalues.reduce((a,b) => a+b)
    return total;
}
// a = [{"polling_unit_uniqueid":"9","party_abbreviation":"PDP","party_score":285,"lga_id":19,"uniqueid":9,"polling_unit_number":"DT1901004"},{"polling_unit_uniqueid":"9","party_abbreviation":"DPP","party_score":1254,"lga_id":19,"uniqueid":9,"polling_unit_number":"DT1901004"},{"polling_unit_uniqueid":"9","party_abbreviation":"ACN","party_score":1032,"lga_id":19,"uniqueid":9,"polling_unit_number":"DT1901004"},{"polling_unit_uniqueid":"9","party_abbreviation":"PPA","party_score":179,"lga_id":19,"uniqueid":9,"polling_unit_number":"DT1901004"},{"polling_unit_uniqueid":"9","party_abbreviation":"CDC","party_score":752,"lga_id":19,"uniqueid":9,"polling_unit_number":"DT1901004"},{"polling_unit_uniqueid":"9","party_abbreviation":"JP","party_score":172,"lga_id":19,"uniqueid":9,"polling_unit_number":"DT1901004"},{"polling_unit_uniqueid":"10","party_abbreviation":"PDP","party_score":561,"lga_id":19,"uniqueid":10,"polling_unit_number":"DT1401005"},{"polling_unit_uniqueid":"10","party_abbreviation":"DPP","party_score":482,"lga_id":19,"uniqueid":10,"polling_unit_number":"DT1401005"},{"polling_unit_uniqueid":"10","party_abbreviation":"ACN","party_score":298,"lga_id":19,"uniqueid":10,"polling_unit_number":"DT1401005"},{"polling_unit_uniqueid":"10","party_abbreviation":"PPA","party_score":833,"lga_id":19,"uniqueid":10,"polling_unit_number":"DT1401005"},{"polling_unit_uniqueid":"10","party_abbreviation":"CDC","party_score":221,"lga_id":19,"uniqueid":10,"polling_unit_number":"DT1401005"},{"polling_unit_uniqueid":"10","party_abbreviation":"JP","party_score":557,"lga_id":19,"uniqueid":10,"polling_unit_number":"DT1401005"},{"polling_unit_uniqueid":"10","party_abbreviation":"PDP","party_score":236,"lga_id":19,"uniqueid":10,"polling_unit_number":"DT1401005"},{"polling_unit_uniqueid":"10","party_abbreviation":"DPP","party_score":1305,"lga_id":19,"uniqueid":10,"polling_unit_number":"DT1401005"},{"polling_unit_uniqueid":"10","party_abbreviation":"ACN","party_score":567,"lga_id":19,"uniqueid":10,"polling_unit_number":"DT1401005"},{"polling_unit_uniqueid":"10","party_abbreviation":"PPA","party_score":624,"lga_id":19,"uniqueid":10,"polling_unit_number":"DT1401005"},{"polling_unit_uniqueid":"10","party_abbreviation":"CDC","party_score":375,"lga_id":19,"uniqueid":10,"polling_unit_number":"DT1401005"},{"polling_unit_uniqueid":"10","party_abbreviation":"JP","party_score":952,"lga_id":19,"uniqueid":10,"polling_unit_number":"DT1401005"},{"polling_unit_uniqueid":"10","party_abbreviation":"ANPP","party_score":583,"lga_id":19,"uniqueid":10,"polling_unit_number":"DT1401005"},{"polling_unit_uniqueid":"10","party_abbreviation":"LABO","party_score":1012,"lga_id":19,"uniqueid":10,"polling_unit_number":"DT1401005"}]
// console.log(calculateSum(a))




// mysql> CREATE TABLE IF NOT EXISTS `customers` (
//     id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
//     email varchar(255) NOT NULL,
//     name varchar(255) NOT NULL,
//     active BOOLEAN DEFAULT false
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8;





  const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

module.exports = connection;