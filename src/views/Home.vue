<template>
  <div class="home">
    <ul>
      <li v-for="page in pages" :key="page[0]">
        <router-link :to="page[0]">{{ page[1] }}</router-link>
      </li>
    </ul>

    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
import { pages } from '../router'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
  },
  data: () => {
    return { pages }
  },
}
</script>
