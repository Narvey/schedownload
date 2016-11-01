#!/bin/bash
sdpath="/home/chip/bin/NodeServer"; #path where you were when you cloned the sd repo
bash $sdpath/schedownload/downloads.sh;

if lsblk|grep sda; then #if the thumbdrive is present
    mount /dev/sda /media/USB1/;
    cp $sdpath/files/* /media/USB1/;
    #uncomment the following line if you do NOT want files accessible from the server, but only from the thumbdrive.
    #rm /home/chip/bin/NodeServer/files/*;
    umount /dev/sda;
else echo "downloads not copied at $(date)">>$sdpath/logs/cron.sh.log;
fi
echo "">$sdpath/schedownload/downloads.sh
