<script setup>//App.vue 其他地方也都可用
</script>
<template>
    <GlobalA></GlobalA>
    <GlobalB></GlobalB>
    <GlobalC></GlobalC>
    <hr>
    全局註冊之問題: <br>
    1. 沒被使用之組件 打包時不會被移除(a.k.a "tree-shaking")<br>
    2. 使文件依賴關係變得不明顯，過多全域變量<br>
    相比 一般註冊(本地local)上述問題解決<br>
    没有使用< script setup> 要使用 components 選項來明確註冊<br>
</template>