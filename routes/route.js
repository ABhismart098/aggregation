const express = require('express');
const router = express.Router();
const{order,showOder, aggreApi} = require("../controller/clsOder")



router.post('/order', order);

router.get('/showAll', showOder );

router.get('/nextTime', aggreApi)

module.exports = {
    router
}