'use strict';
/*global  exports, $,require,_*/
const _ = require("lodash");

import {Loading} from 'element-ui';


/**
 * 在列表视图中使用
 * */
let checkSuccess = function (vm, res, successMsg = "", cb) {
    successMsg = successMsg || "操作成功";
    let data = res.body;
    if (data.success) {
        vm.$message.success(successMsg);
        vm.getList();
        if (_.isFunction(cb)) {
            cb()
        }
    } else {
        vm.$message.error(data.msg+data.errorMsg);
    }
};

let loadingInstance;
let showLoading = function (flag = "") {
    loadingInstance = Loading.service({fullscreen: true});
};

let hideLoading = function (flag = "") {
    if (loadingInstance) {
        loadingInstance.close();
        loadingInstance = null
    }
};


exports.checkSuccess = checkSuccess;
exports.showLoading = showLoading;
exports.hideLoading = hideLoading;
