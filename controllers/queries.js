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