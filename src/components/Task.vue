<template>
    <div class="bg-white mx-auto border shadow rounded-lg overflow-hidden my-5 task-wrap">
        <div class="sm:flex sm:items-center">
            <div class="text-center sm:text-left sm:flex-grow">
                <div v-show="!isEditing">
                    <div class="px-6 py-2">
                        <p class="text-xl leading-tight">{{ task.title }}</p>
                        <p class="text-sm leading-tight text-grey-dark">{{ task.desc }}</p>
                    </div>
                    <div class="flex justify-end py-2 px-3">
                        <i class="far fa-xs fa-trash-alt ml-2 cursor-pointer" v-on:click="deleteTask"></i>
                        <i class="far fa-xs fa-edit ml-2 cursor-pointer" v-on:click="showForm"></i>
                    </div>
                </div>

                <div class="px-3 py-2" v-show="isEditing">
                    <div>
                        <div class="">
                            <label class="block text-grey-darkest text-sm font-medium mb-1" for="task_name">Title</label>
                            <input class="p-2 w-full border-grey border rounded mb-3" id="task_name" type="text" v-model="task.title" >
                        </div>
                        <div class="">
                            <label class="block text-grey-darkest text-sm font-medium mb-1" for="task_desc">Project</label>
                            <input class="p-2 w-full border-grey border rounded mb-3" id="task_desc" type="text" v-model="task.desc" >
                        </div>
                        <div class='ui two button attached buttons'>
                            <button class="w-full border-blue border py-2 px-5 text-blue bg-grey-lighter hover:bg-grey-light" v-on:click="hideForm">
                                Close X
                            </button>
                        </div>
                    </div>
                </div>
                <button v-show="!isEditing && task.done" class="text-xs w-full rounded-br-lg rounded-bl-lg py-3 leading-normal bg-white border border-green text-green hover:bg-green hover:text-white">Completed</button>
                <button v-on:click="completeTask" v-show="!isEditing && !task.done" class="text-xs w-full rounded-br-lg rounded-bl-lg py-3 leading-normal bg-white border border-red text-red">Pending</button>
            </div>
        </div>
    </div>
</template>

<script>
    import EventBus from '../EventBus'

    export default {
        name: "Tasks",
        props: {
            task: Object,
        },
        data() {
            return {
                isEditing: false,
            }
        },
        methods: {
            showForm() {
                this.isEditing = true;
            },
            hideForm() {
                this.isEditing = false;
            },
            deleteTask() {
                this.$emit('delete-task', this.task)
                EventBus.$emit('task-deleted', this.task)
            },
            completeTask() {
                this.$emit('complete-task', this.task)
            }
        },
        mounted() {
            this.$emit('changed')
        }
    }
</script>

<style scoped>
    .task {
        background-color: #fff;
        max-width: 50%;
        margin-right: auto;
        margin-left: auto;
        margin-bottom: 5px;
    }

    .task-wrap {
        transition: transform 0.8s ease;
    }


</style>