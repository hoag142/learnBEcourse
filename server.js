const app = require("./src/app"); //import tự động từ file app

const PORT = 3055
//chỉ định 1 cổng mà máy chủ sẽ lắng nghe và tiếp nhận các requests
const server = app.listen( PORT, () => {
    console.log(`WSV eComerce start with ${PORT} port`) 
})
//bắt đầu một máy chủ riêng trên 1 port đã được chỉ định và khi máy chủ đã sẵn sàng sẽ thực hiện call back
//call back ở đây là in ra console máy chủ đã sẵn sàng với cổng đã chỉ định
 
process.on('SIGINT', () => {
    server.close( () => console.log("Exit server Express"))
})
//Trong Node.js, process.on('SIGINT', callback) là một cách để theo dõi sự kiện khi người dùng gửi tín hiệu tắt (SIGINT), thường được kích hoạt bằng cách nhấn Ctrl + C trong terminal.
//máy chủ sẽ được đóng bằng cách truy cập vào phương thức server.close và hàm callback được truyền vào server.close() sẽ gửi thông điệp máy chủ sẽ dừng 


//không được đụng vào file server này
//file js này chỉ để kết nối server
