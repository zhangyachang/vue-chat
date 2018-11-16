module.exports = function (io) {

    // 建立连接
    

    // 接收消息


    // 发送消息
    let userList = {};
    let userNum = 0;
    io.on('connection', socket => {
        userNum++;
        console.log('一个用户进入了聊天室, 当前房间内共有'+userNum + '人');
    
        // 保存用户信息，一一对应起来
        socket.on('login', msg => {
            console.log('登录信息');
            console.log(msg);

            userList[msg.userId]= socket;
            socket.userId = msg.userId;
            socket.username = msg.username;
            socket.avator = msg.avator;
        })
        
        // 单对单的消息
        socket.on('singleMessage', (msgJson) => {
            /*
                {
                    fromId: ,  谁发送的 id
                    toId: '',  发给谁 id
                    info: ''   发送的消息内容是什么
                }
            */
            console.log(msgJson)
            userList[msgJson.toId].emit('singleMessage', {
                data: msgJson.info,
                img: userList[msgJson.toId].avator,
            });
        })


        // 接收消息 群消息
        socket.on('message', (msg) => {
            console.log(`接收到用户发送的消息了`+msg);
            socket.broadcast.emit('message', msg);
        })
    
        socket.on('disconnect', (args) => {
            userNum--;
            console.log('一个用户退出了,当前房间内还有'+userNum+'人');
        })
    })
}