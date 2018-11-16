<template>
  <div class="login flex flex-column">
    <div class="Lg_title">
      <div class="lg_title_close">
        <img src="../../static/img/login_btn_icon.png" alt="">
      </div>
      <p class="Lg_title_content">请输入账号密码</p>
    </div>
    <div class="login_inp">
      <input type="text" placeholder="手机号或者邮箱" v-model="loginInfo.user">
      <br />
      <input type="text" placeholder="请输入登录密码" v-model="loginInfo.password">
      <button @click="loginSubmit" class="login_btn">登录</button>
      <div class="login_other_info flex">
        <p>
          <a href="">用短信验证码登录</a>
        </p>
        <p>
          <a href="">忘记密码</a>
        </p>
      </div>
    </div>
    <div class="login_other_type">
      <div class="login_other_type_info_wrapper flex">
        <i class="login_other_type_info_beforeline"></i>
        <p class="login_other_type_info">其他登录方式</p>
        <i class="login_other_type_info_afterline"></i>
      </div>
      <div class="login_other_type_icon">
        <div>
          <img src="../../static/img/icon_weixin.png" alt="">
          <span>微信</span>
        </div>
        <div>
          <img src="../../static/img/icon_qq.png" alt="">
          <span>QQ</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        loginInfo: {
          user: '',
          password: ''
        }
      }
    },
    methods: {
      loginSubmit () {
        // 获取账号和密码 并进行判断是否为空
        let userInfo = {
          user: this.loginInfo.user,
          password: this.loginInfo.password
        }
        // 验证在这里验证吧
        console.log(userInfo)
        // 跳转页面
        this.$indicator.open({
          text: '登陆中...',
          spinnerType: 'fading-circle'
        });
        this.$axios.post(this.$config.ioHttp+'/login',userInfo)
          .then(res => {
            console.log(res)
            if(res.data.status == '200'){
              // 在这里假装有数据库保存到localStorage里面
              switch (userInfo.user) {
                case 'aaa' :
                  window.localStorage.userId = 'aaa';
                  window.localStorage.username = '机制的小aaa';
                  window.localStorage.avator = 'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=876690331,1629968853&fm=85&s=BB84DB01A8323184483C9985030060A3';
                  break;
                case 'bbb' :
                  window.localStorage.userId = 'bbb';
                  window.localStorage.username = '机制的小bbb';
                  window.localStorage.avator = 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=2443786011,1290396476&fm=85&s=FD021374DF2A421D469A74D9030070BC';
                  break;
                case 'ccc' :
                  window.localStorage.userId = 'ccc';
                  window.localStorage.username = '机制的小ccc';
                  window.localStorage.avator = 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1091628847,41930541&fm=27&gp=0.jpg';
                  break;
              }

              this.$indicator.close()
              this.$toast({
                message: '登录成功',
                duration: 1000
              })
              this.$router.push({name: 'chatMenu'})
            }else if(res.data.status == '400'){
              this.$indicator.close()
              this.$toast({
                message: '登录失败',
                duration: 1000
              })
            }else{
              console.log('莫名的错误');
            }

          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>
<style>
  .login{
    width: 100%;
    height: 100%;
  }
  .login .Lg_title{
    flex-shrink: 0;
    padding:1rem 1rem 0 1rem;
  }
  .login .Lg_title .lg_title_close{
    width: 2rem;
    height: 2rem;
  }
  .login .Lg_title .lg_title_close img{
    width: 100%;
    height: 100%;
  }
  .Lg_title_content{
    padding: 1rem 0;
    font-size: 2rem;
  }
  .login .login_inp{
    flex-shrink: 0;
    padding: 2rem 1rem 0;
  }
  .login .login_inp input{
    width: 100%;
    border: none;
    border-bottom: 1px solid #eee;
    padding:0.4rem 0 0.5rem 0;
    font-size: 1.1rem;
    line-height: 2rem;
    text-indent: 0.5rem;
    outline: none;
  }
  .login .login_inp .login_btn{
    display: block;
    width: 90%;
    height: 3rem;
    margin: auto;
    margin-top: 5rem;
    border: none;
    outline: none;
    font-size: 1.2rem;
    text-align: center;
    background: #FED9AD;
    color: #FEF4E0;

  }
  .login .login_inp .login_other_info{
    width: 90%;
    margin: auto;
    padding-top: 0.5rem;
    justify-content: space-between;
    font-size: 0.8rem;
    color: #6C89A0;
  }
  .login .login_other_type{
    height: 100%;
    flex-grow: 1;
    padding: 2rem 1rem 0;
    font-size: 1.1rem;
    color: #A1A1A1;
  }
  .login_other_type_info_beforeline, .login_other_type_info_afterline{
    flex-grow: 1;
    width: 100%;
    border-top: 1px solid #ccc;
    margin-top: 0.8rem;
  }
  .login_other_type_info::before{
    left: 0;
  }
  .login_other_type_info::after{
    right: 0;
  }
  .login_other_type_info{
    margin: auto;
    flex-shrink: 0;
    padding: 0 1rem;
    text-align: center;
  }
  .login_other_type_icon{
    padding-top: 0.2rem;
    text-align: center;
  }
  .login_other_type_icon > div{
    display: inline-block;
    width: 3rem;
    height: 3rem;
    padding: 0 0.3rem;
    margin: 0 2.5rem;
    text-align: center;
  }
  .login_other_type_icon img{
    width: 2rem;
    height: 2rem;
  }
</style>
