# vue-multiple-pages

>Vue2.0��ҳӦ��

## Links ��������

1. [Vue](https://github.com/vuejs/vue)
2. [Webpack](https://github.com/webpack/webpack)
3. [Element](https://github.com/ElemeFE/element)

## Start ��ʼ

 - Clone or download this repository
 - Enter your local directory, and install dependencies:

``` bash
npm install
```

## Develop ��������

``` bash
# serve with hot reload at localhost:8080
npm run dev

```

[http://localhost:8010/user/login.html](http://localhost:8010/user/login.html)

[http://localhost:8010/user/index.html](http://localhost:8010/user/index.html)

## Build ��������

``` bash
# build for production with minification
npm run build
node server.js
```

[http://localhost:2333/user/login.html](http://localhost:2333/user/login.html)

## Folder Structure �ļ�Ŀ¼

```bash
������ src             # ��Ŀ¼
��    ������ assets     # ��ԴĿ¼
��    ��    ������ css   # css
��    ��    ������ img   # ͼƬĿ¼
��    ������ components # �Զ������Ŀ¼
��    ������ pages      # ҳ��Ŀ¼
��         ������ user  # ҵ��ģ��Ŀ¼
��              ������ index  # index ҳ��
��              ��    ������ app.js    # ���js
��              ��    ������ app.html  # htmlģ��
��              ��    ������ app.vue   # index ҳ�����
��              ������ login  # login ҳ��
��                   ������ app.js    # ���js
��                   ������ app.html  # htmlģ��
��                   ������ app.vue   # login ҳ�����
������ dist            # npm run build���ɵ�Ŀ¼
������ node_modules    # dependencies
������ .babelrc        # babel�ļ�
������ server.js       # ���ڲ鿴npm run build��server.js���˿�2333
������ webpack.config.js # webpack����Ŀ¼
������ node_modules    # dependencies
������ package.json    # package info
```
