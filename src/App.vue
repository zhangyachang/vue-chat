<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,body{
    width: 100%;
    height: 100%;
    font-size: 14px;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  #app{
    width: 100%;
    height: 100%;
  }
  /*//屏幕宽度低于600px，设置块大小*/
  @media screen and (max-width:340px) {
    html,body{
      font-size: 12px;
    }
  }

  @media screen and (min-width:340px) and (max-width:700px) {
    html,body{
      font-size: 14px;
    }
  }

  @media screen and (min-width:340px) and (max-width:700px)  and (max-height:370px){
    html,body{
      font-size: 12px;
    }
  }

  /*//屏幕宽度在600px与1000px之间的，调整大小*/
  @media screen and (min-width:700px) and (max-width:1100px) {
    html,body{
      font-size: 20px;
    }
  }

  @media screen and (min-width:700px) and (max-width:1100px)  and (max-height:450px){
    html,body{
      font-size: 14px;
    }
  }

  /*//屏幕宽度在600px与1000px之间的，调整大小*/
  @media screen and (min-width:1100px) and (max-width:2000px) {
    html,body{
      font-size: 25px;
    }
  }
  .flex{
    display: flex;
  }
  .flex-one{
    flex:1
  }
  .flex-center{
    align-items: center;
    justify-content: center;
  }
  .flex-item{
    align-items: center;
  }
  .flex-content{
    justify-content: center;
  }
  .flex-row{
    flex-direction: row;
  }
  .flex-column{
    flex-direction: column;
  }

</style>
