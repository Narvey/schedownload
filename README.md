# Note: has vulnerable debug dependency. Open an issue if you actually use this. #

# Schedownload (sd) #

The download scheduler for Node.js servers (for instance [C.H.I.P.](https://getchip.com)).

## To install ##

1. `sudo apt-get install npm; ln -s /usr/bin/nodejs /usr/bin/node`
1. go to the directory you want your sd stuff in and `mkdir logs files`
1. `git clone https://github.com/Narvey/schedownload.git`
1. Wherever you were when you just did those last two steps, take that path and put it in the variable at the top of cron.sh.
2. `sudo crontab -e`
3. In your crontab file, make sure you cd to your files directory (mine is called "files" in my sd directory), &&, and then the full path to your cron.sh as cloned. If you need help making the crontab, read `man 5 crontab`.
1. (optional) Plug in a thumbdrive to C.H.I.P. 
1. You may also need to edit cron.sh if your thumbdrive does not enumerate as /dev/sda.
9. in the generated schedownload directory under your sd directory, run `npm install` and `npm start` to start up your server (or you can optionally use `pm2 start npm -- start --watch` if you have pm2.)
10. (optional) If like to delete downloads from "files" every time they are copied, uncomment the corresponding line in cron.sh. Alternatively, if you want to only delete files after they reach a certain age, use a command like `find /path-to-your-sd-dir/files/* -ctime +1 -delete` in your crontab.

## To use ##

1. Right-click on the link you want to download and say Copy Link Location or similar.
2. Go to http://192.168.0.115:3000/ (or whichever static IP you plugged into YOUR router) and paste the url you would like to download into the box and hit Submit.
3. You will be redirected to http://192.168.0.115:3000/downloadit/?YOUR_URL_HERE , which of course you could use directly if you need to script this rather than going through the homepage.
