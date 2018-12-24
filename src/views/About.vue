<template>
    <div class="about">
        <h1>This is an about page</h1>
        <p v-text="count"></p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>

        <div class="container-none mx-auto">
            <div class="inline-flex">
                <app-menu v-for="menu in menus" :key="menu.id" :menu="menu" />
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex'
    import axios from 'axios'
    import AppMenu from '../components/Menu'

    export default {
        name: 'About',
        components: {
            AppMenu
        },
        computed: {
            ...mapGetters(['count', 'menus'])
        },
        methods: {
            ...mapMutations(['increment', 'decrement'])
        },
        created() {
            axios.get('http://aliyawholesale.com/api/menu').then(data => {
                this.$store.dispatch('fetchMenu', data);
                console.log(this.menus)
            });
        }
    }
</script>