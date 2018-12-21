<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
  import store from '../Vuex'

  export default {
    name: 'About',
    computed: {
      count() {
        return store.state.count;
      }
    },
    methods: {
      increment() {
        store.commit('increment');
      },
      decrement() {
        store.commit('decrement');
      }
    }
  }
</script>