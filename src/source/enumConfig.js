'use strict';

const enumConfig = {
  RoleEnum: [
    {"code": 0, "desc": "默认游客"}, {"code": 1, "desc": "产品专员"},
    {"code": 2, "desc": "销售专员"}, {"code": 3, "desc": "订单管理员"},
    {"code": 999, "desc": "超级管理员"}
  ],
  SystemTypeEnum: [
    {"code": 1, "desc": "BMS"},
    {"code": 2, "desc": "UMS"},
  ],
  ElementTypeEnum: [
    {"code": "button", "desc": "button"},
    {"code": "div", "desc": "div"},
    {"code": "a", "desc": "a"},
  ],
  RefuseTypeEnum: [
    {"code": "hide", "desc": "hide"},
    {"code": "disable", "desc": "disable"},
    {"code": "alert", "desc": "alert"},
  ]
};

exports.enumConfig = enumConfig;



