<template>
  <form action="">
    用户名：<input type="text" name="userName" /> <br />
    密码：<input type="password" name="userPwd" /> <br />
    <!--email提供了默认的电子邮箱的完整验证：要求必须包含@符号，同时必须包含服务器名称，如果不能满足验证，则会阻止当前的数据提交-->
    邮箱：<input type="email" /> <br />
    <!--tel它并不是来实现验证。它的本质目的是为了能够在移动端打开数字键盘。意味着数字键盘限制了用户只能输入数字。  如何查看效果：qq发送文件>>手机端使用qq来接收>>使用手机浏览器查看-->
    电话：<input type="tel" /> <br />
    <!--验证只能输入合法的网址：必须包含http://-->
    网址：<input type="url" /> <br />
    <!--number：只能输入数字(包含小数点)，不能输入其它的字符
    max:最大值
    min:最小值
    value:默认值-->
    数量：<input type="number" value="60" max="100" min="0" /> <br />
    <!--search：可以提供更人性化的输入体验-->
    请输入商品名称：<input type="search" /> <br />
    <!--range:范围-->
    范围：<input type="range" max="100" min="0" value="50" /> <br />
    颜色：<input type="color" /> <br />
    <!--日期时间相关-->
    <!--time:时间：时分秒-->
    时间：<input type="time" /> <br />
    <!--date：日期：年月日-->
    日期：<input type="date" /> <br />
    <!--datetime:大多数浏览器不能支持datetime.用于屏幕阅读器-->
    日期时间：<input type="datetime" /><br />
    <!--datetime-local:日期和时间-->
    日期时间：<input type="datetime-local" /> <br />
    月份：<input type="month" /> <br />
    星期：<input type="week" />
    <!--提交-->
    <input type="submit" />
  </form>
</template>

<script>
export default {
  name: 'FormEx',
  metaInfo: {
    title: '04-HTML5-表单的新增type属性',
  },
  mounted() {},
}
</script>

<style lang="scss" scoped></style>
