const Candidate = require('../../database/models/Candidate');
const Poll = require('../../database/models/Poll');

module.exports = {
    async store(req,res){
        const {name, final_date, access_id} = req.body;

        const [poll] = await Poll.findOrCreate({
            where:{name, final_date, access_id}
        });

        return res.status(200).json({poll})
    },


    async index(req, res){
        const {access_id} = req.params;

        const poll = await Poll.findOne({
            where:{access_id}
        })
        const candidates = await Candidate.findAll({
            include:{
                association:"polls",
                where:{access_id},
                attributes:[],
                through: { attributes: [] },
            },
            attributes:["name","cpf","birthday","address"]
        })

        return res.status(200).json({poll,candidates})
    }
}