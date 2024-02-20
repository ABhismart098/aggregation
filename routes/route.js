const express = require('express');
const router = express.Router();

//we need to use body parser to parse the data
var bodyParser = require('body-parser')
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
const{order,showOder, aggreApi} = require("../controller/clsOder")

router.post('/order', order);

router.get('/showAll', showOder );

router.get('/nextTime', aggreApi)

module.exports = router