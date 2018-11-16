<template>
  <div class="chat_content flex flex-column">
    <head-nav :headNav="headNav"></head-nav>
    <ul ref="chat_ul" class="cc_ul">
      <li v-for="(item,index) in chatInfo" :key=index :class="item.isMe?'self':'friend'">
        <div class="cc_avator">
          <img :src="item.avator" alt="">
        </div>
        <p class="cc_content">{{item.content}}</p>
      </li>
    </ul>
    <div class="cc_bottom flex">
      <div class="ccbi_voice">
        <img src="../../static/img/voice_icon.png" alt="">
      </div>
      <div class="ccbi_inp">
        <input ref="inp" v-model="chatVal" type="text" />
      </div>
      <div v-if="!chatVal" class="ccbi_smile">
        <img class="ccbi_add" src="../../static/img/add_icon.png" alt="">
      </div>
      <div v-else @click="sendInfo" class="ccbi_send">
        发送
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        chatVal: '',
        avator: '',
        headNav: {
          icon: '../../static/img/hd_back_icon1.png',
          title: '',
          rightInfo: '设置'
        },
        chatInfo: [
          {
            isMe: false,
            avator: 'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=876690331,1629968853&fm=85&s=BB84DB01A8323184483C9985030060A3',
            content: '行，想要那就给你！话不多说，看图吧！行，想要那就给你！话不多说，看图吧行，想要那就给你！话不多说，看图吧',
            time: new Date()
          },
          {
            isMe: true,
            avator: 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=2443786011,1290396476&fm=85&s=FD021374DF2A421D469A74D9030070BC',
            content: '行，想要那就给你！话不多说，看图吧！',
            time: new Date()
          },
          {
            isMe: true,
            avator: 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=2443786011,1290396476&fm=85&s=FD021374DF2A421D469A74D9030070BC',
            content: '行，想要那就给你！话不多说，看图吧！',
            time: new Date()
          }
        ]
      }
    },
    sockets:{//不能改
      connect:function() {//与socket.io连接后回调
        console.log('socket 连接成功！');
        this.$socket.emit('login', {
          userId: window.localStorage.userId,
          username: window.localStorage.username,
          avator: window.localStorage.avator
        })
      },
      login:function(value) {
        console.log(value);//监听login(后端向前端emit  login的回调)
      },
      singleMessage (msg){
        console.log(`后端给我们发送消息了`);
        console.log(msg);
        let info = {
          isMe: false,
          avator: msg.avator,
          content:  msg.data,
          time: new Date()   // 时间从后台传过来吧
        };
        this.chatInfo.push(info);
        this.$nextTick(() => {
          this.$refs.chat_ul.scrollTop = this.$refs.chat_ul.scrollHeight + 100;
        });
      }
    },
    methods: {
      sendInfo (e) {
        // 重新获得焦点吧
        var target = e.target
        var oInp = this.$refs.inp

        // 点击提交之后
        this.$socket.emit('singleMessage', {
          toId: window.localStorage.friendId,
          fromId: window.localStorage.userId,
          info: this.chatVal
        });//触发start
        // 把消息添加到自己的页面上
        let info = {
          isMe: true,
          avator: window.localStorage.avator,
          content:  this.chatVal,
          time: new Date()   // 时间从后台传过来吧
        };
        this.chatInfo.push(info);

        this.$nextTick(() => {
          this.$refs.chat_ul.scrollTop = this.$refs.chat_ul.scrollHeight + 100;
        });

        // 重新获得焦点这些东西在最后再执行吧
        this.chatVal = '';
        oInp.focus()
      },
      // 添加消息到页面上  绝对不是这样的
    },
    created () {
      console.log(this.$route.params)
      var info = this.$route.params.userInfo
      this.headNav.title = info.username
      this.avator = info.img

    }
  }
</script>

<style>
  .chat_content {
    width: 100%;
    height: 100%;
  }
  .chat_content .cc_ul{
    flex-grow: 1;
    height: 100%;
    overflow: scroll;
    padding: 0 0.6rem;
    background: #EEEEEF;
  }
  .chat_content .cc_ul .cc_avator{
    overflow: hidden;
    width: 3.4rem;
    height: 3.4rem;
    border-radius: 50%;
  }
  .chat_content .cc_ul li{
    margin: 0.5rem 0;
  }
  .chat_content .cc_ul li::after{
    content: "";
    display: block;
    clear: both;
  }
  .chat_content .cc_ul .friend .cc_avator{
    float: left;
  }
  .chat_content .cc_ul .cc_avator img{
    width: 100%;
    height: 100%;
  }
  .chat_content .cc_ul li .cc_content{
    position: relative;
    max-width: calc(100% - 8.2rem);
    min-height: 2rem;
    border-radius: 0.6rem;
    padding: 0.8rem;
    margin-top: 0.4rem;
    font-size: 1rem;
    line-height: 1.5rem;
    background: #fff;
    color: #484848;
  }
  .chat_content .cc_ul li.cc_content::before{
    width: 0;
    height: 0;
    top: 0.5rem;
  }
  .chat_content .cc_ul li.friend .cc_content::before{
    position: absolute;
    content: "";
    left: -1.4rem;
    border: 0.7rem solid transparent;
    border-top-width: 0.2rem;
    border-right: 0.7rem solid #fff;
  }
  .chat_content .cc_ul li.friend .cc_content{
    float: left;
    margin-left: 1rem;
  }
  .chat_content .cc_ul li.self .cc_avator{
    float: right;
  }
  .chat_content .cc_ul li.self .cc_content{
    float: right;
    margin-right: 1rem;
  }
  .chat_content .cc_ul li.self .cc_content::before{
    position: absolute;
    content: "";
    right: -1.4rem;
    border: 0.7rem solid transparent;
    border-top-width: 0.2rem;
    border-left: 0.7rem solid #fff;
  }

  .chat_content .cc_bottom{
    flex-shrink: 0;
    height: 3rem;
    padding: 0 0.5rem;
    background: #fff;
  }
  .chat_content .cc_bottom img{
    width: 100%;
    height: 100%;
  }
  .chat_content .cc_bottom .ccbi_voice{
    flex-shrink: 0;
    width: 2rem;
    height: 2rem;
    border: 1px solid #bbb;
    border-radius: 50%;
    padding: 0.2rem;
    margin-top: 0.5rem;
  }
  .chat_content .cc_bottom .ccbi_inp{
    flex-grow: 1;
    margin: 0.2rem 0 0 0.2rem;
  }
  .chat_content .cc_bottom .ccbi_inp input{
    width: 100%;
    height: 2.6rem;
    border: 1px solid #eee;
    outline: none;
    font-size: 1.2rem;
    text-indent: 0.3rem;
    background: url("../../static/img/smile_icon.png") no-repeat right 6px center/ 1.6rem 1.6rem;
  }
  .chat_content .cc_bottom .ccbi_smile{
    flex-shrink: 0;
    width: 2rem;
    height: 2rem;
    margin: 0.5rem 0 0 0.2rem;
    border: 1px solid #ccc;
    border-radius: 50%;
    padding: 0.2rem;
  }
  .ccbi_send{
    width: 3rem;
    height: 2.2rem;
    margin: 0.4rem 0 0 0.3rem;
    border-radius: 0.2rem;
    line-height: 2.2rem;
    text-align: center;
    background: #FF8202;
    color: #F3E3B9;
  }
  .ccbi_send:active{
    background: #C16223;
  }
</style>
