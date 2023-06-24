const { users } = require('../../database/models')
class Controller {

    static async get(req, res) {

        try {
            const data = await users.findOne({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    

    static async getAll(req, res) {
        try {
            const data = await users.findAll();
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    }



}

module.exports = Controller;