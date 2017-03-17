<template>
    <nav style="text-align: center;margin:-20px 0 0 0;padding-bottom: 15px;">
        <ul class="pagination DivCenter" style="margin: 0 0 0 0">
            <li>
                <a @click="setIndex(1)" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li v-for="n in numCount" :class="{ 'active': index == (n+offset+1)}">
                <a @click="setIndex(n+offset+1)">{{n+offset+1}}</a>
            </li>

            <li>
                <a @click="setIndex(count)" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>

            <li v-if="showJump">
                <input class="pagerNum" type="text" v-model="jump" @keyup.enter="jumpClick">
                <button type="button" class="btn btn-success" @click="jumpClick">跳转</button>
            </li>


            <li v-if="debug">
                count: {{count}}
                offset: {{offset}}
            </li>
        </ul>
    </nav>

</template>
<script type="text/babel">
    export default {
        // replace: true,
        props: {
            //['size', 'index', 'total']
            size: {
                type: Number,
                default: 20
            },
            index: {
                type: Number,
                default: 1
            },
            total: {
                type: Number,
                required: true
            },
            showJump: {
                type: Boolean,
                default: true
            },
            debug: {
                type: Boolean,
                default: false
            }
        },
        created () {

        },

        data (){
            return {
                jump: "" //page count
            }
        },
        computed: {
            count(){
                return this.getCount()
            },
            offset(){
                let _count = this.getCount();
                return _count < 9 || this.index < 5 ? 0 : Math.min(this.index - 5, _count - 9)
            },
            numCount(){
                return Math.min(this.getCount(), 9)
            },
            showLast(){
                return this.index != this.getCount();

            },
            showFirst(){
                return this.index != 1 && this.getCount() > 1;
            }
        },
        methods: {
            getCount(){
                let divisor = ~~(this.total / this.size);
                return (this.total % this.size) == 0 ? divisor : divisor + 1
            },
            jumpClick(){
                let _jump = ~~this.jump;
                let _count = this.getCount()
                if (_jump < 1 || _jump > _count) {
                    this.jump = "";
                    return false;
                }

                this.setIndex(_jump);
            },
            setIndex (val){
                if (this.index == val)
                    return false;

                this.index = val
                this.$dispatch('paging', val)
            }
        }
    }
</script>


<style>
    .pagination a {
        cursor: pointer;
        width: 42px;
    }

    .pagination .pagerNum {
        margin-left: 10px;
        height: 32px;
        width: 42px;
        text-align: center;
    }
</style>
