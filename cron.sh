#!/bin/bash
sdpath="/home/chip/bin/NodeServer"; #path where you were when you cloned the sd repo
exec 2>> $sdpath/logs/cron.sh.log; #redirect standard error to the log file.
if $sdpath/schedownload/downloads.sh; then
    echo "">$sdpath/schedownload/downloads.sh;
fi

if lsblk|grep sda1; then #if the thumbdrive is present
    mount /dev/sda1 /media/USB1/;
    cp $sdpath/files/* /media/USB1/;
    #uncomment the following line if you do NOT want files accessible from the server, but only from the thumbdrive.
    #rm /home/chip/bin/NodeServer/files/*;
    umount /dev/sda1;
    echo "1">$sdpath/maydelete;
else echo "downloads not copied at $(date)">>$sdpath/logs/cron.sh.log;echo "0">$sdpath/maydelete;
fi

