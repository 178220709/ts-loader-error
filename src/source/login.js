'use strict';

const Cookies = require("js-cookie");
import $ from "assets/lib/jquery"

const LoginKey = "LoginKey" + $("body").data("login-key") || "";
const BmsCookieKey = "CookieKey-dev-1";
const UmsCookieKey = "CookieKey-dev-2";
const PmpBackCookieKey = "CookieKey-dev-3";
const returnUrl = {
    returnLink: "",
    guid: "l_guid",
    token: ""
};
let getAppCookieKey = function () {
    const _body = $("body");
    let systype = _body.data("systype");
    let env = _body.data("env");
    if (!systype || !env) {
        console.error("该系统没有设置cookie key ")
    }
    return `CookieKey-${env}-${systype}`
};


let getUser = function () {
    let str = localStorage.getItem(LoginKey);
    return str ? JSON.parse(str) : null
};
//JSON.parse(localStorage.getItem("LoginKey"))
let setUser = function (userDto) {
    return localStorage.setItem(LoginKey, JSON.stringify(userDto))
};


let setToken = function (guid, token) {
    return Cookies.set(getAppCookieKey(), guid + ',' + token, {domain: document.domain, expires: 30});
};
let delToken = function () {
    return Cookies.remove(getAppCookieKey(), {domain: document.domain});
};
let getToken = function () {
    return Cookies.get(getAppCookieKey(), {domain: document.domain});
};


exports.getUser = getUser;
exports.setUser = setUser;

exports.setToken = setToken;
exports.delToken = delToken;
exports.getToken = getToken;


exports.LoginKey = LoginKey;
exports.returnUrl = returnUrl;
exports.sysTypeCookieNames = ["", BmsCookieKey, UmsCookieKey, PmpBackCookieKey];



