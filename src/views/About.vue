<template>
    <div class="about">
        <h1>This is an about page</h1>
        <p v-text="count"></p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>

<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex'

    export default {
        name: 'About',
        computed: {
            ...mapGetters(['count', 'menus'])
        },
        methods: {
            ...mapMutations(['increment', 'decrement'])
        }
    }
</script>