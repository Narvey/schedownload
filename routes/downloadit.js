var express = require('express');
var router = express.Router();

/* respond to GET api for downloading. */
router.get('/', function(req, res, next) {
  res.send('Download scheduled! <br>'); //You should see your file at 192.168.0.115/files/'+'');
});

module.exports = router;
