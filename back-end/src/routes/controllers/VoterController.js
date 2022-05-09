const Voter = require('../../database/models/Voter');
const Candidate = require('../../database/models/Candidate');
const { index } = require('./PollController');

module.exports = {

    async store(req,res){
        const {cpf} = req.body;
        const {candidate_id} = req.params;

       const candidate = await Candidate.findByPk(candidate_id)
    
        if(!candidate){
            return res
            .status(400)
            .json({ error: "candidato não encontrado"});
        }

        await Voter.create({cpf, candidate_id});
        return res.status(200);
    },


    async index(req, res){
        const {candidate_id} = req.params;

        const candidate = await Candidate.findByPk(candidate_id, {
            include:{
                association:"voters"
            }
        })
        candidate.voters.forEach(voters => {
            console.log(voters.id);
        });
        return res.send(candidate.voters)


    }
}