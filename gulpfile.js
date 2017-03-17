'use strict';

var gulp = require('gulp'),
    path = require('path'),
    fs = require('fs');
const qiniu = require('gulp-qiniu');


const qiniu_options = {
    accessKey: '4WfelkXe9pDiGNSLuw2U_asLFaYQEFDksDiBAAJn',
    secretKey: 'SrOJBMenW_scnRFEOoEgI_EgEMbh84iNyOZI69nS',
    bucket: 'shumixian',
    origin: 'http://qn.jsonsong.com',
    private: false,
    prefix: 'unknown/v',
};

/**
 * 返回qiniu的src处理pip
 * @param page
 *
 * */
let qnPipe = function (page, version) {
    qiniu_options.prefix = `${page}/v${version}`;
    return qiniu(qiniu_options, {
        dir: qiniu_options.prefix,
        versioning: false,
        concurrent: 10
    });
}


//发布公共资源,如字体,图标文件等
gulp.task('publish_assets_resources', function (cb) {
    qiniu_options.prefix = `assets/imgs`;
    let pip = qiniu(qiniu_options, {
        dir: qiniu_options.prefix,
        versioning: false,
        concurrent: 10
    });

    gulp.src([
        './dist/assets/imgs/*'])
        .pipe(pip)
        .on('end', cb);
});


gulp.task('publish_pmp_front', function (cb) {
    const page = "pmp/front";
    publishByPage(page, cb)
});
gulp.task('publish_pmp_back', function (cb) {
    const page = "pmp/back";
    publishByPage(page, cb)
});

function publishByPage(page, cb) {
    const version = require(`./src/pages/${page}/version`).version;
    gulp.src([
        './dist/assets/**/*.js',
        './dist/assets/**/*.css',
        './dist/assets/**/*.map',
        `./dist/${page}/*`])
        .pipe(qnPipe(page, version))
        .on('end', cb);
}

