const router = require('express').Router();
const controller = require('../controllers/user');
router.get('/', controller.getAll);
router.get('/:id', controller.get);


module.exports = router;