var express = require('express');
var router = express.Router();
var fs = require('fs');

/* respond to GET api for downloading. */
router.get('/', function(req, res, next) {
  fs.open('./downloads.sh','a+',function(err,fd) {
    if (err) return console.error(err);
    var params = req.url.split('?');
    fs.write(fd, 'echo \"' + params + '\" >> /home/chip/bin/NodeServer/files/list.txt;');//TODO: sanitize input and actually wget.
  });
  res.send('Download scheduled! <br>'); //You should see your file at 192.168.0.115/files/'+'');
});

module.exports = router;
