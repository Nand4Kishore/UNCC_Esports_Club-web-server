const express = require('express');
const controller= require('../controllers/connectionController');
const router = express.Router();

// router.get('/', controller.index);
router.get('/index', controller.index);

router.get('/', controller.connections);
router.get('/newconnection',controller.new);

router.post('/',controller.create);

router.get('/:id',controller.show);
 
router.get('/:id/update',controller.edit);

router.put('/:id',controller.update);

router.delete('/:id',controller.delete);

module.exports = router;    