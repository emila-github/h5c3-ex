<template>
  <div>
    <form action="" id="myForm">
      <!--placeholder：提示文本，提示占位-->
      <!--autofocus:自动获取焦点-->
      <!--autocomplete:自动完成：on:打开  off:关闭
    1.必须成功提交过:提交过才会记录
    2.当前添加autocomplete的元素必须有name属性-->
      用户名：<input type="text" name="userName" placeholder="请输入用户名" autofocus autocomplete="on" /> <br />
      <!--tel并不会实现验证，仅仅是在移动端能够弹出数字键盘-->
      <!--required:必须输入，如果没有输入则会阻止当前数据提交-->
      <!--pattern:正则表达式验证
    *:代表任意个
    ?:代表0个或1个
    +：代表1个或多个-->
      手机号：<input type="tel" name="userPhone" required pattern="^(\+86)?1\d{10}$" /> <br />
      <!--multiple：可以选择多个文件-->
      文件：<input type="file" name="photo" multiple /> <br />
      <!--email:有默认验证  在email中，multiple允许输入多个邮箱地址，以逗号分隔-->
      邮箱：<input type="email" name="email" multiple /><br />

      <!--提交：-->
      <input type="submit" /> <br />
    </form>
    <!--下面这个表单元素并没有包含在form中：默认情况下面表单元素的数据不会进行提交-->
    <!--form:指定表单id,那么在将来指定id号的表单进行数据提交的时候，也会将当前表单元素的数据一起提交-->

    地址：<input type="text" name="address" form="myForm" />
  </div>
</template>

<script>
export default {
  name: 'FormEx',
  metaInfo: {
    title: '05-HTML5-表单中新增的其它属性',
  },
  mounted() {},
}
</script>

<style lang="scss" scoped></style>
