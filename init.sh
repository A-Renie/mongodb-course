#!/bin/bash

# Initialization de la DB
echo "====================="

ls /
cd /dataset

# Conversion des fins de ligne CRLF vers LF
find . -type f -name "*.json" -exec dos2unix {} \; 2>/dev/null || \
find . -type f -name "*.json" -exec sed -i 's/\r$//' {} \;

for directory in *; do
    if [ -d "${directory}" ] ; then
        echo "$directory"
        for data_file in $directory/*; do
            mongoimport --drop --db "$directory" --collection "$(basename $data_file .json)" --file $data_file  --username "root"  --authenticationDatabase admin --password "test123"
        done
    fi
done