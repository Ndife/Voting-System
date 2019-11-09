const express = require('express');
const router = express.Router();
const { getLocalGovts, getPollUnits, totalVotes } = require('../controllers/indexController')

router.get('/searchlga',getLocalGovts);
router.get('/individualPollUnit',getPollUnits);
router.get('/getTotal/:id',totalVotes);

module.exports = router;