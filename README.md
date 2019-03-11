# mobile-tpl

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 移动端适配原理
- ui图标准宽度为750px, vw即为屏幕分割为100份 ===> 100vw ==> 750px === 0.1333333vw ==> 1px
- 设置htmlfont-size = 13.3333, vw此时 1rem === html的font-size 即为 100px 

参照来源 https://juejin.im/post/5ad4bcdd6fb9a028e33bedab