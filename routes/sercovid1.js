var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register_position', (req, res, next) => {

    //  /:apikey/:codeindividu/:latitude/:longitude/:date_register
    
    var apikey = req.params.apikey
    var codeindividu = req.params.codeindividu
    var latitude = req.params.latitude
    var longitude = req.params.longitude
    var date_register = req.params.date_register

    //code ici

    if(1) {
        var result = {
            status: 1
        }
    } else {
        var result = {
            status: 0
        }
    }

    res.json(result)

})


module.exports = router;
