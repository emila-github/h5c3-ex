<template>
  <div>
    <!--max:最大值
value:当前进度值-->
    <progress max="100" value="100"></progress>

    <!--度量器：衡量当前进度值-->
    <!--high:规定的较高的值
low:规定的较低的值
max:最大值
min:最小值
value:当前度量值-->
    <meter max="100" min="0" high="80" low="40" value="30"></meter>
    <meter max="100" min="0" high="80" low="40" value="60"></meter>
    <meter max="100" min="0" high="80" low="40" value="100" name="level"></meter>
  </div>
</template>

<script>
export default {
  name: 'FormProgressEx',
  metaInfo: {
    title: '09-HTML5-进度条',
  },
  mounted() {},
}
</script>

<style lang="scss" scoped></style>
