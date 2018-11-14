module.exports = function (io) {

    // 建立连接
    

    // 接收消息


    // 发送消息


    

    let userList = new Set();
    io.on('connection', socket => {
        userList.add(socket);
        console.log('一个用户建立了连接');
        console.log(userList.size);
    
        socket.on('chat message', (msg) => {
            console.log(`接收到用户发送的消息了`+msg);
            io.emit('chat message', msg);
        })
    
        socket.on('disconnect', (args) => {
            console.log('监听到退出了吗');
            console.log(...args)
            console.log('一个用户退出了');
    
        })
    })
}