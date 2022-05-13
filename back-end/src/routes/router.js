const express = require("express");
const router = express.Router();

const PollController = require('./controllers/PollController');
const CandidateController = require('./controllers/CandidateController');
const VoterController = require('./controllers/VoterController');

router.post('/Poll', PollController.store);
router.get('/Poll/:access_id', PollController.index)

router.post('/Candidate', CandidateController.store);
router.get('/candidate/:access_id', CandidateController.index); 

router.post('/Voter/:candidate_id', VoterController.store);
router.get('/Voter/:candidate_id', VoterController.index);
module.exports = router;
