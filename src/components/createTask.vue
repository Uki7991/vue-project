<template>
    <div class="max-w-xs mx-auto">
        <div class="px-3 py-2 border rounded-lg" v-show="isCreating">
            <div>
                <div class="">
                    <label class="block text-grey-dark text-sm font-medium mb-1" for="task_name">Title</label>
                    <input class="p-2 w-full border-grey border rounded mb-3" id="task_name" type="text" v-model="title">
                </div>
                <div class="">
                    <label class="block text-grey-dark text-sm font-medium mb-1" for="task_desc">Description</label>
                    <input class="p-2 w-full border-grey border rounded mb-3" id="task_desc" type="text" v-model="desc">
                </div>
                <div class="w-full">
                    <button v-on:click="sendForm" class="w-1/2 py-2 px-4 font-normal border-blue-light border rounded-l-lg text-blue hover:border-blue-dark hover:text-blue-dark">Create</button>
                    <button v-on:click="isCreating = !isCreating" class="w-1/2 py-2 px-4 font-normal border-red-light border rounded-r-lg text-red hover:border-red-dark hover:text-red-dark">Cancel</button>

                </div>
            </div>

        </div>
        <button v-on:click="isCreating = !isCreating" v-show="!isCreating" class="py-3 px-4 font-semibold border-grey-light border rounded text-grey hover:border-grey-dark hover:text-grey-dark"><i class="fas fa-plus"></i></button>
    </div>


</template>

<script>
    export default {
        name: "createTask",
        data() {
            return {
                title: '',
                desc: '',
                isCreating: false
            }
        },
        methods: {
            sendForm() {
                if (this.title.length > 0 && this.desc.length > 0) {
                    const title = this.title;
                    const desc = this.desc;
                    this.$emit('create-task', {
                        title, desc, done: false
                    })
                }
                this.title = '';
                this.desc = '';
                this.isCreating = false
            }
        }
    }
</script>

<style scoped>

</style>