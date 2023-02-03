# Api-Nonce
## Windows Installation
ติดตั้ง Nodejs ให้เรียบร้อย จากนั้นเปิด cmd หรือ PowerShell ขึ้นมา (Run As Administrator) พิมพ์คำสั่ง
```sh
npm install --global --production windows-build-tools
```
จากนั้นติดตั้ง `pm2` และ `pm2-windows-startup`
```sh
npm install -g pm2 pm2-windows-startup
pm2-startup install
```
ให้เข้าไปที่โฟลเดอร์ api-nonce-master
<br>จากนั้นให้ทำการเปิดใช้งาน `nonce_start.bat` 
<br>ระบบ `api-nonce`  ออนไลน์ที่ http://localhost:3030
<br>ต้องการปิดการทำงาน `api-nonce` ให้พิมพ์คำสั่ง
```sh
pm2 stop all
```
