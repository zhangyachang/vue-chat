<template>
  <div class="chat_content">
    <ul class="chat_content_ul">
      <li class="friend">
        <chatList></chatList>
      </li>
      <li class="self"></li>
    </ul>
  </div>
</template>

<script>
  import chatList from '../components/chatContent'
  export default {
    components: {
      chatList
    }
  }
</script>

<style>
  .chat_content {
    width: 100%;
    height: 100%;
  }
</style>
