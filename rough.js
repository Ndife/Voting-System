// function calculateSum(value){
//     const Pvalues = value.map(({party_score}) => party_score)
//     total = Pvalues.reduce((a,b) => a+b)
//     return total;
// }
// // a = [{"polling_unit_uniqueid":"9","party_abbreviation":"PDP","party_score":285,"lga_id":19,"uniqueid":9,"polling_unit_number":"DT1901004"},{"polling_unit_uniqueid":"9","party_abbreviation":"DPP","party_score":1254,"lga_id":19,"uniqueid":9,"polling_unit_number":"DT1901004"},{"polling_unit_uniqueid":"9","party_abbreviation":"ACN","party_score":1032,"lga_id":19,"uniqueid":9,"polling_unit_number":"DT1901004"},{"polling_unit_uniqueid":"9","party_abbreviation":"PPA","party_score":179,"lga_id":19,"uniqueid":9,"polling_unit_number":"DT1901004"},{"polling_unit_uniqueid":"9","party_abbreviation":"CDC","party_score":752,"lga_id":19,"uniqueid":9,"polling_unit_number":"DT1901004"},{"polling_unit_uniqueid":"9","party_abbreviation":"JP","party_score":172,"lga_id":19,"uniqueid":9,"polling_unit_number":"DT1901004"},{"polling_unit_uniqueid":"10","party_abbreviation":"PDP","party_score":561,"lga_id":19,"uniqueid":10,"polling_unit_number":"DT1401005"},{"polling_unit_uniqueid":"10","party_abbreviation":"DPP","party_score":482,"lga_id":19,"uniqueid":10,"polling_unit_number":"DT1401005"},{"polling_unit_uniqueid":"10","party_abbreviation":"ACN","party_score":298,"lga_id":19,"uniqueid":10,"polling_unit_number":"DT1401005"},{"polling_unit_uniqueid":"10","party_abbreviation":"PPA","party_score":833,"lga_id":19,"uniqueid":10,"polling_unit_number":"DT1401005"},{"polling_unit_uniqueid":"10","party_abbreviation":"CDC","party_score":221,"lga_id":19,"uniqueid":10,"polling_unit_number":"DT1401005"},{"polling_unit_uniqueid":"10","party_abbreviation":"JP","party_score":557,"lga_id":19,"uniqueid":10,"polling_unit_number":"DT1401005"},{"polling_unit_uniqueid":"10","party_abbreviation":"PDP","party_score":236,"lga_id":19,"uniqueid":10,"polling_unit_number":"DT1401005"},{"polling_unit_uniqueid":"10","party_abbreviation":"DPP","party_score":1305,"lga_id":19,"uniqueid":10,"polling_unit_number":"DT1401005"},{"polling_unit_uniqueid":"10","party_abbreviation":"ACN","party_score":567,"lga_id":19,"uniqueid":10,"polling_unit_number":"DT1401005"},{"polling_unit_uniqueid":"10","party_abbreviation":"PPA","party_score":624,"lga_id":19,"uniqueid":10,"polling_unit_number":"DT1401005"},{"polling_unit_uniqueid":"10","party_abbreviation":"CDC","party_score":375,"lga_id":19,"uniqueid":10,"polling_unit_number":"DT1401005"},{"polling_unit_uniqueid":"10","party_abbreviation":"JP","party_score":952,"lga_id":19,"uniqueid":10,"polling_unit_number":"DT1401005"},{"polling_unit_uniqueid":"10","party_abbreviation":"ANPP","party_score":583,"lga_id":19,"uniqueid":10,"polling_unit_number":"DT1401005"},{"polling_unit_uniqueid":"10","party_abbreviation":"LABO","party_score":1012,"lga_id":19,"uniqueid":10,"polling_unit_number":"DT1401005"}]
// // console.log(calculateSum(a))



// function strangeWords(n,v) {
//     let usedNumber = []
//     count = 0;
//     sum = 0;
//     for(i=0; i<v.length; i++){
//         for(j=0; j< v.length; j++){
//             if( (v[i] == v[j] ) && !(usedNumber.includes(v[i])) ){
//                 count++ 
//             }
//         }
//         usedNumber.push(v[i])
//         if(count >=2){
//             sum += Math.floor(count/2)
//         }
//         count = 0
//     }
//     return sum
// }

// function strangeWords(n,v) {
//     newArr = [...new Set(v)]
//     count = 0;
//     sum = 0;
//     for(i=0; i<newArr.length; i++){
//         for(j=0; j< v.length; j++){
//             if( (newArr[i] == v[j] ) ){
//                 count++ 
//             }
//         }
//         if(count >=2){
//             sum += Math.floor(count/2)
//         }
//         count = 0
//     }
//     return sum
// }

// console.log(strangeWords(9,[10,20,20,10,10,30,50,10,20,40,40]))

