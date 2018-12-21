<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <test-component msg="Test component"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TestComponent from '../components/TestComponent.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    TestComponent
  }
}
</script>
