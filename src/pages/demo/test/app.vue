<template>
    <div id="app">
        <div>
            {{msg}}
        </div>
        <div class="d">
        </div>
    </div>
</template>

<script type="ts" lang="ts">
    import Vue from 'vue'
    import {Component, Inject, Model, Prop, Watch} from 'vue-property-decorator'

    interface Item {
        code: number;

        desc: string
    }

    @Component
    export default  class App extends Vue {
        // Makes a "exampleProperty" a component prop with the default value of 'Example'
        msg: string = "1234";

        baseList: Array<Item> = [];

        str1: string = "";

        showMsg() {
            console.log(this.msg);
            this.baseList.forEach(a => parseFloat(a.desc) .toFixed(2))
        }

    }

</script>

