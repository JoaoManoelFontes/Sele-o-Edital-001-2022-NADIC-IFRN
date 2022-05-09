const Candidate = require('../../database/models/Candidate');
const Poll = require('../../database/models/Poll');

module.exports = {
    async store(req,res){
        const {name, cpf, address, birthday, final_date, access_id} = req.body;

        const candidate = await Candidate.create({name, cpf, address, birthday});
        const poll = await Poll.findOne({where:{final_date, access_id}})
        
        await candidate.addPoll(poll);

        return res.status(200).json({candidate, poll})
    }
}