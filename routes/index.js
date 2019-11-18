const express = require('express');
const router = express.Router();
const { getLocalGovts, getPollUnits, totalVotes, addNewPoll, getNewPollUnits, getParty, getPollingId } = require('../controllers/indexController')

router.get('/searchlga',getLocalGovts);
router.get('/individualPollUnit',getPollUnits);
router.get('/getTotal/:id',totalVotes);
router.post('/addPoll',addNewPoll);
router.get('/getNewPolls',getNewPollUnits);
router.get('/getParty',getParty);
router.get('/getPollingId',getPollingId);


module.exports = router;