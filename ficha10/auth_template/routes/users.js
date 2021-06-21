var express = require('express');
var router = express.Router();

var usersControllers = require('../controllers/usersController');

router.use(isLoggedIn);
router.get('/', usersControllers.getUsers);
router.get('/test', usersControllers.getTest);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated())
        return next();
    res.status(401).send("unauthorized");
}

module.exports = router;