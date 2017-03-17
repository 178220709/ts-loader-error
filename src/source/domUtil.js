/**
 * Created by jsons on 2016/11/9.
 */



/*
 * 回车 换行 class 添加 EntryMoveRow
 * 如果有多列,则data-encls中指定不同列的cls
 */
let initEntryMoveRow = function () {
    $(document).on("keypress", ".EntryMoveRow", function (event) {
        if (event.keyCode == "13") {
            let me = $(this);
            var encls = me.data("encls") || "EntryMoveRow";

            var inputs = $("." + encls); // 获取表单中的所有输入框
            var idx = inputs.index(this); // 获取当前焦点输入框所处的位置
            if (idx == inputs.length - 1) {
                return false;
            } else {
                inputs[idx + 1].focus(); // 设置焦点
                inputs[idx + 1].select(); // 选中
            }
        }
    })
};

/*
 * input 得到焦点 tr加背景
 */
let initInputShowFocus = function () {
    $(document).on("focus", ".InputShowFocus", function (event) {
        $(this).closest("tr").addClass("trSelected")
    }).on("blur", ".InputShowFocus", function (event) {
        $(this).closest("tr").removeClass("trSelected")
    });
};


let getSize = function () {
  let winWidth, winHeight = 0;
//获取窗口宽度
  if (window.innerWidth)
    winWidth = window.innerWidth;
  else if ((document.body) && (document.body.clientWidth))
    winWidth = document.body.clientWidth;
//获取窗口高度
  if (window.innerHeight)
    winHeight = window.innerHeight;
  else if ((document.body) && (document.body.clientHeight))
    winHeight = document.body.clientHeight;
//通过深入Document内部对body进行检测，获取窗口大小
  if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
    winHeight = document.documentElement.clientHeight;
    winWidth = document.documentElement.clientWidth;
  }
//结果输出至两个文本框
  return [winWidth, winHeight]
};


exports.initDomEvent = function () {
    initEntryMoveRow();
    initInputShowFocus();
};
