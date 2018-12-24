<template>
    <router-link class="cursor-pointer px-4 py-2 bg-white border
                    border-green hover:bg-green hover:border-green-darker
                    hover:text-white mx-3" @click="fetchData"
                 :id="menu.id" tag="div" :to="link">
        {{ menu.name }}
    </router-link>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "menu",
        props: {
            menu: Object
        },
        computed: {
            link() {
                return {
                    name: 'category',
                    params: {
                        slug: this.menu.slug
                    }
                }
            }
        },
        methods: {
            fetchData() {
                let routes = this.$router.options;
                console.log(routes);
                axios.get('http://aliyawholesale.com/api/' + this.menu.slug).then((res) => {
                    console.log('axios');
                })
            }
        }
    }
</script>

<style scoped>

</style>