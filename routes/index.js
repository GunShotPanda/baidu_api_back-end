var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
    var option = {
        url: "http://"+req.query.address,
        headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; Touch; rv:11.0) like Gecko'},
    };
    request(option,function (err, response, body) {
        if (!err && response.statusCode === 200) {
            res.json(JSON.parse(body));
        }
    })
});

module.exports = router;
