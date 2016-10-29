var express = require('express');
var router = express.Router();

express.use('/files',express.static('/home/chip/bin/NodeServer/files'));//have static folder available

/* respond to GET api for downloading. */
router.get('/*', function(req, res, next) {
  fs.open('./downloads.sh','a+',,function(err,fd) {
    if (err) return console.error(err);
    fs.write(fd, 'echo \"' + req.URL + '\" >> /home/chip/bin/NodeServer/files/list.txt');//TODO: sanitize input and actually wget.
  });
  res.send('Download scheduled! <br>'); //You should see your file at 192.168.0.115/files/'+'');
});

module.exports = router;
