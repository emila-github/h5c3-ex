<template>
  <div></div>
</template>

<script>
export default {
  name: '',
  metaInfo: {
    title: '01-HTML5-网络状态',
  },

  mounted() {
    /*1.ononline:网络连通的时候触发这个事件*/
    window.addEventListener('online', function() {
      alert('网络连通了')
    })

    /*2.onoffline:网络断开时触发*/
    window.addEventListener('offline', function() {
      alert('网络断开了')
    })
  },
}
</script>

<style></style>
