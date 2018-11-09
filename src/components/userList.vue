<template>
  <div class="userlist flex flex-row">
    <div class="ul_avator">
      <img :src="userInfo.img" alt="">
    </div>
    <div class="ul_userInfo">
      <p class="username">{{userInfo.username}}</p>
      <p class="ul_user_newinfo">{{userInfo.newInfo}}</p>
      <p class="ul_time">{{userInfo.time}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['userInfo'],
    data () {
      return {}
    },
    methods: {

    },
    created () {

    }
  }
</script>
<style>
  .userlist{
    width: 100%;
    height: 100%;
    padding: 0.2rem 0;
  }
  .userlist .ul_avator{
    overflow: hidden;
    width: 3.4rem;
    height: 3.4rem;
    flex-shrink: 0;
    border-radius: 50%;
    margin: 0.8rem 0 0 0;
  }
  .userlist .ul_avator img{
    width: 100%;
    height: 100%;
  }
  .userlist .ul_userInfo{
    flex-grow: 1;
    overflow: hidden;
    width: 100%;
    position: relative;
    padding: 0.5rem 0 0.5rem 0.5rem;
    border-top: 1px solid #eee;
  }
  .ul_userInfo p{
    line-height: 2rem;
  }
  .ul_userInfo p.username{
    font-size: 1.1rem;
    color: #000;
  }
  .ul_userInfo .ul_user_newinfo{
    width: 85%;
    color: #999;
    font-size: 0.9rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .ul_time{
    position: absolute;
    top: 0.7rem;
    right: 0.5rem;
    color: #666;
    font-size: 0.9rem;
  }
</style>
