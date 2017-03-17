'use strict';
/*global  exports, $,require,_*/
let moment = require('moment');
import $ from "assets/lib/jquery"
let _ = require('lodash');

String.prototype.format = function () {
    let args = arguments;
    let reg = /\{(\d+)}/g;
    return this.replace(reg, function (g0, g1) {
        return args[+g1];
    });
};

Array.prototype.chain = function () {
    return _.chain(this)
};

if (!Array.prototype.find) {
    Array.prototype.find = function (fn) {
        return _.find(this, fn)
    };
}

const isDebugger = $("body").data("is-debugger") == "1";

window.dlog = function (data) {
    if (isDebugger) {
        console.log(data)
    }
};

let $body = $("body");
let getConfigPath = function (apiUrl, host) {
    // let hostKey = systemType ? `host-${systemType}` : "host";
    // let host = localStorage.getItem(hostKey) || $body.data(hostKey);
    // return host + apiUrl;
    host = host || localStorage.getItem("host") || $("body").data("host");
    return host + apiUrl;
};


let simpleCopy = function (to, from) {
    Object.keys(from).forEach(key => to[key] = from[key]);
    return to
};


/**
 *
 * @return {String} YYYY-MM-DD HH:mm:ss.SSS
 */
let getJavaDate = function (str) {
    return moment(str).format("YYYY-MM-DD HH:mm:ss.SSS")
};
let getShortDateStr = function (date) {
    date = date || new Date();
    return moment(date).format("YYYY-MM-DD")
};

let addDaysWithDateStr = function (dateStr, days) {
    return moment(dateStr).add(days, 'd').format("YYYY-MM-DD");
};

let getMinTimeStr = function (dateStr) {
    dateStr = dateStr ? moment(dateStr.format("YYYY-MM-DD")) : moment().format("YYYY-MM-DD");
    return moment(dateStr).format("YYYY-MM-DD HH:mm:ss")
};
let getMaxTimeStr = function (dateStr) {
    dateStr = dateStr ? moment(dateStr.format("YYYY-MM-DD")) : moment().format("YYYY-MM-DD");
    return moment(dateStr).add(1, 'd').add(-1, 's').format("YYYY-MM-DD HH:mm:ss")
};
let getRangeDateFromEnd = function (end) {
    end = end || moment().format("YYYY-MM-DD");
    let start = addDaysWithDateStr(end, -7);
    return [getJavaDate(getMinTimeStr(start)), getJavaDate(getMinTimeStr(end))]
};

/**对日期字符串排序*/
let sortDateStrArr = function (arr) {
    return arr.map(d => {
        return {"key": d, "value": moment(d).valueOf()}
    }).sort((a, b) => a.value - b.value).map(a => a.key);
};
let getVueObj = function (obj) {
    return JSON.parse(JSON.stringify(obj))
};

//为图标option 加上统一的一些设置
let setOption = function (opt) {
    _.extend(opt, {
        toolbox: {
            show: true,
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        }
    });
    opt.series.forEach(item => item.itemStyle = {
        normal: {
            label: {
                position: "top",
                show: true,
            }
        }
    });
    return opt;
};


exports.simpleCopy = simpleCopy;
exports.getVueObj = getVueObj;
exports.setOption = setOption;
exports.getShortDateStr = getShortDateStr;
exports.getMinTimeStr = getMinTimeStr;
exports.getMaxTimeStr = getMaxTimeStr;
exports.getRangeDateFromEnd = getRangeDateFromEnd;
exports.sortDateStrArr = sortDateStrArr;
exports.getConfigPath = getConfigPath;
