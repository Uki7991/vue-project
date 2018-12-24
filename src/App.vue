<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/todo">Todo</router-link>
    </div>
    <div class="container-none mx-auto">
      <div class="inline-flex">
        <app-menu v-for="menu in menus" :key="menu.id" :menu="menu" />
      </div>
    </div>
    <router-view/>
  </div>
</template>


<script>
  import axios from 'axios'
  import AppMenu from './components/Menu'

  export default {
    name: 'app',
    components: {
      AppMenu
    },
    data: () => ({
      menus: []
    }),
    created() {
      axios.get('http://aliyawholesale.com/api/menu').then(res => {
        this.menus = res.data;
        console.log(this.menus)
      });
    }
  }
</script>

<style>
@tailwind preflight;
@tailwind components;
@tailwind utilities;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
