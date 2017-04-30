<template>
    <div id="app">
        <div class="d">
            test page
        </div>
        <h1>{{ msg }}</h1>
        <img :src="logoImg" alt="">
        <input type="button" @click.native="startHacking" value="Let's do it">
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
                alert("hello")
            }
        }
    }
</script>
