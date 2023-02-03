@echo off
call npm install 
call pm2 start index.js --name api-nonce-generator -i max
cmd /k
