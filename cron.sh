#!/bin/bash
bash /home/chip/bin/NodeServer/schedownload/downloads.sh;

if lsblk|grep sda1; then #if the thumbdrive is present
    mount /dev/sda1 /media/USB1/;
    cp /home/chip/bin/NodeServer/files/* /media/USB1/;
    rm /home/chip/bin/NodeServer/files/*;
else echo "downloads not copied at $(date)">>/home/chip/bin/NodeServer/logs/cron.sh.log;
fi
