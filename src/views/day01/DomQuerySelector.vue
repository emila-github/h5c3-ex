<template>
  <div>
    <ul>
      <li class="red">前端与移动开发</li>
      <li class="blue">java</li>
      <li>javascript</li>
      <li class="red">c++</li>
    </ul>
    <input type="button" value="为第一个li元素添加样式" id="add" />
    <input type="button" value="为第二个li元素移除样式" id="remove" />
    <input type="button" value="为第三个li元素切换样式" id="toggle" />
    <input type="button" value="判断第四个li元素是否包含某个样式" id="contain" />
  </div>
</template>

<script>
export default {
  name: 'FormEx',
  metaInfo: {
    title: '13-HTML5-类样式操作',
  },
  mounted() {
    window.onload = function() {
      /*add:为元素添加指定名称的样式.一次只能添加一个样式*/
      document.querySelector('#add').onclick = function() {
        /*classList:当前元素的所有样式列表-数组*/
        document.querySelector('li').classList.add('red')
        document.querySelector('li').classList.add('underline')
        //document.querySelector("li").className="red underline"
        /*获取样式*/
        var result = document.querySelector('li').classList.item(2)
        console.log(result)
      }

      /*remove:为元素移除指定名称的样式(不是移除class属性)，一次也只能移除一个*/
      document.querySelector('#remove').onclick = function() {
        document.querySelector('.blue').classList.remove('blue')
      }

      /*toggle：切换元素的样式：如果元素之前没有指定名称的样式则添加。如果有则移除*/
      document.querySelector('#toggle').onclick = function() {
        document.querySelectorAll('li')[2].classList.toggle('green')
      }

      /*contains:判断元素是否包含指定名称的样式，返回true/false*/
      document.querySelector('#contain').onclick = function() {
        var isContain = document.querySelectorAll('li')[3].classList.contains('red')
        console.log(isContain)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.red {
  color: red;
}
.green {
  color: green;
}
.blue {
  color: blue;
}
.underline {
  text-decoration: underline;
}
</style>
