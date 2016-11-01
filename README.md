# Schedownload (sd) #

The download scheduler for Node.js servers (for instance C.H.I.P.).

##To install##

1. `mkdir logs files`
1. `git clone https://github.com/Narvey/schedownload.git`
1. Wherever you were when you just did those two steps, take that path and put it in the variable at the top of cron.sh.
2. `sudo crontab -e`
3. In your crontab file, make sure you cd to your files directory (mine is called "files" in the directory immediately above the one git created when cloning), &&, and then the full path to your cron.sh as cloned. If you need help making the crontab, read `man 5 crontab`.
6. (optional) Plug in a thumbdrive to C.H.I.P. 
7. You may also need to edit cron.sh if your thumbdrive does not enumerate as /dev/sda.

##To use##

1. Right-click on the link you want to download and say Copy Link Location or similar.
2. Go to http://192.168.0.115:3000/ (replaced with your local IP of course) and paste the url you would like to download into the box and hit Submit.
3. You will be redirected to http://192.168.0.115:3000/downloadit/?YOUR_URL_HERE , which of course you could use directly if you need to script this rather than going through the homepage.

