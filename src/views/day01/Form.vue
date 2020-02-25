<template>
  <form action="">
    <fieldset>
      <legend>学生档案</legend>
      <label for="userName">姓名:</label>
      <input type="text" name="userName" id="userName" placeholder="请输入用户名" />
      <label for="userPhone">手机号码:</label>
      <input type="tel" name="userPhone" id="userPhone" pattern="^1\d{10}$" />
      <label for="email">邮箱地址:</label>
      <input type="email" required name="email" id="email" />
      <label for="collage">所属学院:</label>
      <input type="text" name="collage" id="collage" list="cList" placeholder="请选择" />
      <datalist id="cList">
        <option value="前端与移动开发学院"></option>
        <option value="java学院"></option>
        <option value="c++学院"></option>
      </datalist>
      <label for="score">入学成绩:</label>
      <input type="number" max="100" min="0" value="0" id="score" />
      <label for="level">基础水平:</label>
      <meter id="level" max="100" min="0" low="59" high="90"></meter>
      <label for="inTime">入学日期:</label>
      <input type="date" id="inTime" name="inTime" />
      <label for="leaveTime">毕业日期:</label>
      <input type="date" id="leaveTime" name="leaveTime" />
      <input type="submit" />
    </fieldset>
  </form>
</template>

<script>
export default {
  name: 'FormEx',
  metaInfo: {
    title: '10-HTML5-表单总结案例',
  },
  mounted() {
    document.getElementById('score').oninput = function() {
      document.getElementById('level').value = this.value
    }
  },
}
</script>

<style lang="scss" scoped>
form {
  width: 600px;
  margin: 20px auto;
}

form > fieldset {
  padding: 10px;
}

form > fieldset > meter,
form > fieldset > input {
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 10px 0;
  border: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  padding-left: 5px;
  /*width=内容+padding+border*/
  box-sizing: border-box;
}
form > fieldset > meter {
  padding-left: 0px;
}
</style>
