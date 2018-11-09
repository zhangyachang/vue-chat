<template>
  <div class="chatMenu">
    <ul class="cm_userList">
      <li v-for="item in userInfo" @click="chatToFriends(item.id)">
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
            id: '11111',
            img: 'https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=2279636795,3547734581&fm=85&s=1824C7144C1A73CC3E3A14870300E0A8',
            username: '机制的先生',
            time: '12:32',
            newInfo: '在呢？怎么啦'
          },
          {
            id: '22222',
            img: 'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=876690331,1629968853&fm=85&s=BB84DB01A8323184483C9985030060A3',
            username: '您的客服',
            time: '12:32',
            newInfo: '小Q是腾讯客内容。小Q是腾讯客内容。小Q是腾讯客内容。小Q是腾讯客内容。小Q是腾讯客内容。小Q是腾讯客内容。'
          },
          {
            id: '33333',
            img: 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=2443786011,1290396476&fm=85&s=FD021374DF2A421D469A74D9030070BC',
            username: '马先生',
            time: '12:32',
            newInfo: '当天的消息，以每5分钟时间的日期。'
          }
        ]
      }
    },
    methods: {
      chatToFriends (id) {
        console.log(id);
        console.log('我被点击了啊');
        this.$router.push({name: 'chatToFriends', query:{id: id}});
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
  .cm_userList{
    padding:0 0.3rem;
  }
</style>
