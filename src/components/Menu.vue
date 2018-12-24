<template>
    <div @click="fetchData" class="cursor-pointer px-4 py-2 bg-white border border-green hover:bg-green hover:border-green-darker hover:text-white mx-3">{{ menu.name }}</div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "menu",
        props: {
            menu: Object
        },
        methods: {
            fetchData() {
                axios.get('http://aliyawholesale.com/api/'+this.menu.slug).then((res) => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped>

</style>