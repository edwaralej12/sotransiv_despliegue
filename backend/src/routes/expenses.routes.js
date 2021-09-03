const express = require('express')
const router = express.Router()
const controllerExpenses = require('../controllers/expenses.controller');
const Route = require('../model/Route');

router.get('/', controllerExpenses.getRouteExpenses);
router.get('/editExpenses/:id_ruta', controllerExpenses.getEditExpenses);




module.exports = router;