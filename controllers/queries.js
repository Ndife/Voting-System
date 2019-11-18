exports.GET_LGA_QUERY = `SELECT lga_name, lga_id FROM lga `;
exports.SELECT_ALL_POLLING_RESULT_QUERY = `
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

exports.SELECT_POLLING_UNIT_QUERY = `
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
p.lga_id =`;

exports.CREATE_NEW_POLLING_UNIT = `
    CREATE TABLE IF NOT EXISTS new_polling_unit (
    result_id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    polling_unit_uniqueid varchar(50) NOT NULL,
    party_abbreviation char(5) NOT NULL,
    party_score int(11) NOT NULL,
    entered_by_user varchar(50) NOT NULL,
    date_entered datetime NOT NULL,
    user_ip_addresFull varchar(255) NOT NULL,
    user_ip_addres varchar(50) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8; `;

  exports.ADD_QUERY = `INSERT INTO new_polling_unit 
  (
      polling_unit_uniqueid,
      party_abbreviation,
      party_score,
      entered_by_user,
      date_entered,
      user_ip_addresFull, 	
      user_ip_addres
  ) 
  VALUES`;

  exports.SELECT_ALL_NEW_POLLING_QUERY = `SELECT 
  result_id, 
  polling_unit_uniqueid,
  party_abbreviation, 
  party_score,
  entered_by_user
  FROM new_polling_unit`;

  exports.GET_PARTY_QUERY = `SELECT partyname, partyid from party`;
  exports.GET_POLLING_ID_QUERY = 'SELECT uniqueid from polling_unit'