<template>
    <div>
        <h3>{{ msg}}</h3>
    </div>
</template>

<script>
    export default {
        name: "TestComponent",
        props: {
            msg: String
        }
    }
</script>

<style scoped>

</style>