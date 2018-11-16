<template>
  <div class="chatMenu">
    <ul class="cm_userList">
      <li v-for="(item, index) in userInfo" :key=index @click="chatToFriends(item)">
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
            id: 'aaa',
            img: 'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=876690331,1629968853&fm=85&s=BB84DB01A8323184483C9985030060A3',
            username: '机制的小aaa',
            time: '12:32',
            newInfo: '在呢？怎么啦'
          },
          {
            id: 'bbb',
            img: 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=2443786011,1290396476&fm=85&s=FD021374DF2A421D469A74D9030070BC',
            username: '我是小bbb啊',
            time: '12:32',
            newInfo: '小Q是腾讯客内容。小Q是腾讯客内容。小Q是腾讯客内容。小Q是腾讯客内容。小Q是腾讯客内容。小Q是腾讯客内容。'
          },
          {
            id: 'ccc',
            img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1091628847,41930541&fm=27&gp=0.jpg',
            username: '小三',
            time: '12:32',
            newInfo: '当天的消息，以每5分钟时间的日期。'
          }
        ]
      }
    },
    methods: {
      chatToFriends (userInfo) {
        console.log(userInfo);
        var data = {
          id: userInfo.id,
          img: userInfo.img,
          username: userInfo.username
        };
        window.localStorage.friendId = userInfo.id;
        this.$router.push({name: 'chatToFriends', params:{userInfo: userInfo}});
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
  .cm_userList li:nth-child(1) .ul_userInfo{
    border-top: none;
  }
</style>
