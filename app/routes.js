var appconfig = require('./appconfig');
var Menuitemcontroller = require('./controllers/menuitemcontroller');
var Usercontroller = require('./controllers/usercontroller');

var express = appconfig.express;

var router = express.Router();

router.get('/menuitem', Menuitemcontroller.getMenuItems);
router.post('/user/login', Usercontroller.userExists);
router.post('/user/signup', Usercontroller.addUser);

module.exports = router;