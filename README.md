# awsw2

# install nodejs npm
apt install nodejs
apt install npm

#pull code

cd /home/ubuntu

git clone ...

cd awsw2

npm install

node app.js

#install PM2

npm install -g pm2 

#start app with pm2

pm2 start app.js --name=nodejs-server

pm2 save

#config pm2 start on system boot

pm2 startup

#config nginx server

sudo apt install nginx

sudo nano /etc/nginx/sites-available/default

location / {
        proxy_pass http://localhost:3000;
    }

#check nginx config

sudo nginx -t

#restart nginx

sudo service nginx restart
