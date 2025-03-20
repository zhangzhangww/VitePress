# 前端面试题合集

## HTML

### 1. 什么是HTML5？列举HTML5的新特性。
- **答案**: HTML5是最新的HTML标准，引入了新的元素和API，如`<audio>`、`<video>`、`<canvas>`、本地存储、WebSocket等。

### 2. 解释HTML中的语义化标签。
- **答案**: 语义化标签如`<header>`、`<footer>`、`<article>`、`<section>`等，使代码更具可读性，有助于SEO和可访问性。

## CSS

### 3. 解释CSS盒模型。
- **答案**: CSS盒模型包括内容(content)、内边距(padding)、边框(border)和外边距(margin)。

### 4. 如何实现垂直居中？
- **答案**: 可以使用`flexbox`、`grid`、`transform`或`table-cell`等方法实现垂直居中。

## JavaScript

### 5. 解释闭包(closure)。
- **答案**: 闭包是函数和其词法环境的组合，允许函数访问其外部作用域的变量。

### 6. 什么是事件委托？
- **答案**: 事件委托是将事件处理程序添加到父元素，利用事件冒泡机制处理子元素的事件。

## Vue.js

### 7. 解释Vue的生命周期钩子。
- **答案**: Vue的生命周期钩子包括`beforeCreate`、`created`、`beforeMount`、`mounted`、`beforeUpdate`、`updated`、`beforeDestroy`、`destroyed`。

### 8. 什么是Vuex？
- **答案**: Vuex是Vue的状态管理库，用于集中管理应用的所有组件的状态。

## React

### 9. 解释React的虚拟DOM。
- **答案**: 虚拟DOM是React的一种机制，通过比较虚拟DOM树的差异来高效更新实际DOM。

### 10. 什么是React Hooks？
- **答案**: React Hooks是React 16.8引入的特性，允许在函数组件中使用状态和生命周期方法。

## 性能优化

### 11. 如何优化前端性能？
- **答案**: 可以通过减少HTTP请求、使用CDN、压缩资源、懒加载、代码拆分等方法来优化前端性能。

## 网络

### 12. 解释HTTP和HTTPS的区别。
- **答案**: HTTPS是HTTP的安全版本，使用SSL/TLS加密数据，确保数据传输的安全性。

## 工具

### 13. 什么是Webpack？
- **答案**: Webpack是一个模块打包工具，用于将多个模块打包成一个或多个bundle文件。

### 14. 如何使用Git进行版本控制？
- **答案**: 可以使用`git init`初始化仓库，`git add`添加文件，`git commit`提交更改，`git push`推送到远程仓库等命令进行版本控制。

## 算法与数据结构

### 15. 实现一个快速排序算法。
- **答案**: 
```javascript
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[0];
    const left = [];
    const right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
