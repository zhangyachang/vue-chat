<template>
  <div class="top_nav flex">
    <div class="tn_back" @click="back">
      <img :src="headNav.icon" alt="">
    </div>
    <div class="tn_title">{{headNav.title}}</div>
    <div class="tn_set">{{headNav.rightInfo}}</div>
  </div>
</template>
<script>
  export default {
    props: ['headNav'],
    data () {
      return {}
    },
    methods: {
      back () {
        this.$router.go(-1);
      }
    },
    created () {
      console.log(this.headNav)
    }
  }
</script>
<style>
  .top_nav{
    flex-shrink: 0;
    height: 3rem;
    line-height: 3rem;
    padding: 0 0.6rem;
    font-size: 1.2rem;
    background: #fff;
  }
  .top_nav {

  }
  .top_nav .tn_back{
    width: 2.4rem;
    height: 2.4rem;
    margin-top: 0.4rem;
  }
  .top_nav .tn_back img{
    width: 100%;
    height: 100%;
  }
  .top_nav .tn_title{
    flex-grow: 1;
    text-align: center;
    color: #666;
  }
  .top_nav .tn_set{
    width: 3rem;
  }
</style>
