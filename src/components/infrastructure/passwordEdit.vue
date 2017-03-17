<template>
    <modal :show.sync="open">
        <div slot="modal-header" class="modal-header">
            <h4 class="modal-title">修改密码</h4>
        </div>
        <div slot="modal-body" class="modal-body">
            <label>新密码</label>
            <input class="form-control" v-model="newPassword">
        </div>
        <div slot="modal-footer" class="modal-footer">
            <button type="button" class="btn btn-success" @click='onSaveClick'>修改</button>
            <button type="button" class="btn btn-danger" @click='open = false'>取消</button>
        </div>
    </modal>
</template>
<script type="text/babel">
    import login from '../../source/login'
    import {backuserInfos_updatePasswordById}from "../../config/resources"

    export default {
        props: {
            open: {
                type: Boolean,
                default: true
            },
        },
        data (){
            return {
                newPassword: "",
            }
        },

        computed: {},
        methods: {
            onSaveClick () {
                let params = {
                    id: login.getUser().id,
                    password: this.newPassword
                };
                backuserInfos_updatePasswordById.update(params, {emulateJSON: true}).then(res=> {
                    let data = res.json();
                    if (data.success) {
                        this.newPassword = "";
                        this.open = false;
                        alert("保存成功");
                    } else {
                        alert(data.errorMsg);
                    }
                });
            },
        }
    }
</script>
