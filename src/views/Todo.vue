<template>
    <div class="container">
        <div class="todo-list some-list">
            <h2>Tasks</h2>
            <p>Completed tasks: {{ todos.filter(todo => {return todo.done === true}).length }}</p>
            <p>Pending tasks: {{ todos.filter(todo => {return todo.done === false}).length }}</p>
            <div class="relative">
                <transition-group name="slide-fade">
                    <task v-on:complete-task="completeTask" v-on:delete-task="deleteTask" v-for="task in todos" :key="task.id" :task="task"></task>
                </transition-group>
            </div>

            <p>Deleted {{ deletedTask }}</p>

            <create-task v-on:create-task="createTask"></create-task>
            <button v-on:click="shuffleTasks" class="py-3 px-4 font-semibold border-grey-light border rounded text-grey hover:border-grey-dark hover:text-grey-dark"><i class="fas fa-random"></i></button>
        </div>
    </div>
</template>

<script>
    import Task from '../components/Task.vue'
    import createTask from '../components/createTask.vue'
    import todos from '../todos'
    import _ from 'lodash'
    import EventBus from '../EventBus'

    export default {
        name: "Todo",
        components: {
            Task,
            createTask
        },
        data() {
            return {
                todos: todos,
                deletedTask: null,
        }
        },
        mounted() {
            EventBus.$on('task-deleted', data => {
                this.infoTask(data)
            })
        },
        methods: {
            deleteTask(task) {
                const todoIndex = this.todos.indexOf(task);
                this.todos.splice(todoIndex, 1);
            },
            shuffleTasks() {
                this.todos = _.shuffle(this.todos);
                console.log(this.todos)
            },
            createTask(payload) {
                let arr = this.todos.concat().sort((a,b) => (a.id - b.id));
                let id = this.todos.length ? arr[arr.length - 1].id : 0;
                console.log(id);
                console.log(arr.length);
                console.log(this.todos.length);

                this.todos.unshift({id: id + 1, title: payload.title, desc: payload.desc, done: payload.done})
            },
            completeTask(task) {
                const todoIndex = this.todos.indexOf(task);
                this.todos[todoIndex].done = true;
            },
            infoTask(data) {
                this.deletedTask = data.title
            }
        }
    }
</script>

<style lang="scss" scoped>
    $mainColor: red;

    .container {
        max-width: 50%;
        margin-left: auto;
        margin-right: auto;
    }
    .py-1 {
        padding-top: 3px;
        padding-bottom: 3px;
    }
    .px-4 {
        padding-left: 12px;
        padding-right: 12px;
    }
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        position: absolute;
        width:100%;
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(100px);
        opacity: 0;
    }
</style>