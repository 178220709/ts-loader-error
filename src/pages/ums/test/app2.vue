<template>
    <div id="app">
        <div class="d">
            test page
        </div>
        <h1>{{ msg }}</h1>
        <h1>{{ logoImg }}</h1>
        <el-button @click.native="startHacking">Let's do it</el-button>
    </div>
</template>

<script type="javascript">
    import logo from "assets/img/logo.png"
    export default {
        data () {
            return {
                msg: 'Use Vue 2.0 Today!',
                logoImg: logo
            }
        },

        methods: {
            startHacking () {
                this.$notify({
                    title: 'It Works',
                    message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
                    duration: 6000
                })
            }
        }
    }
</script>
