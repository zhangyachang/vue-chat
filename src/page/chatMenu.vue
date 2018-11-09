<template>
  <div class="chatMenu">
    <ul>
      <li v-for="item in userInfo">
        <userList :userInfo="item"></userList>
      </li>
    </ul>
  </div>
</template>
<script>
  import userList from '../components/userList'
  export default {
    data () {
      return {
        // https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=876690331,1629968853&fm=85&s=BB84DB01A8323184483C9985030060A3
        // https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=2279636795,3547734581&fm=85&s=1824C7144C1A73CC3E3A14870300E0A8
        // https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=2443786011,1290396476&fm=85&s=FD021374DF2A421D469A74D9030070BC
        userInfo: [
          {
            img: 'https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=2279636795,3547734581&fm=85&s=1824C7144C1A73CC3E3A14870300E0A8',
            username: '机制的先生',
            time: '12:32',
            newInfo: '在呢？怎么啦'
          },
          {
            img: 'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=876690331,1629968853&fm=85&s=BB84DB01A8323184483C9985030060A3',
            username: '您的客服',
            time: '12:32',
            newInfo: '小Q是腾讯客服专家，同时也是本帮助页面的作者。请在下方提供反馈，以帮助她优化内容。'
          },
          {
            img: 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=2443786011,1290396476&fm=85&s=FD021374DF2A421D469A74D9030070BC',
            username: '马先生',
            time: '12:32',
            newInfo: '当天的消息，以每5分钟为一个跨度的显示时间；消息超过1天、小于1周，显示星期+收发消息的时间,消息大于1周，显示手机收发时间的日期。'
          },
        ]
      }
    },
    components: {
      userList
    }
  }
</script>
<style>
  .chatMenu{
    width: 100%;
    height: 100%;
  }
</style>
