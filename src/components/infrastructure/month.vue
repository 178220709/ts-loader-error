<template>
    <label class="control-label">月份:</label>
    <select class="form-control" v-model="code">
        <option v-for="item in months" :value="item.code">{{item.desc}}</option>
    </select>
</template>

<script type="text/ecmascript-6">
    import moment  from "moment";
    export default {
        props: {
            code: {
                type: String,
                default: "1"
            },
        },
        data (){
            return {
                months: [{"code": "1", "desc": "一月"},
                    {"code": "2", "desc": "二月"},
                    {"code": "3", "desc": "三月"},
                    {"code": "4", "desc": "四月"},
                    {"code": "5", "desc": "五月"},
                    {"code": "6", "desc": "六月"},
                    {"code": "7", "desc": "七月"},
                    {"code": "8", "desc": "八月"},
                    {"code": "9", "desc": "九月"},
                    {"code": "10", "desc": "十月"},
                    {"code": "11", "desc": "十一月"},
                    {"code": "12", "desc": "十二月"}
                ],
            }
        },
    }
</script>
