#!/bin/bash
set -e

# Start MySQL
service mysql start

mysql -u root -p"password" -e "CREATE DATABASE IF NOT EXISTS travel; CREATE USER 'user'@'%' IDENTIFIED BY 'password'; GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;"

java -jar whertotravel.jar
