<template>
  <div></div>
</template>
<script>
  import axios from 'axios'
  export default {
    created () {
      axios.get(' http://xiaoye121.com:8000')
        .then(res => {
          console.log(res);
        })
    }
  }
</script>
<style>

</style>
