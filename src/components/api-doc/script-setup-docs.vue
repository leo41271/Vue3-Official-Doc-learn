<script setup>
let msg = 'Hello!' // 变量
function log() { console.log(msg); msg = "6666"; }

import { capitalize } from './helpers'; // 導入 函式 直接解構
// const { testString } = require('./helpers');
// 使用 require 導入函數。 es6 與 commonjs 不能混用!!
// 使用 Node.js 的 require 、module.exports，只能在 Node.js(後端) 環境中使用，無法在瀏覽器端的 JavaScript 中使用。

import { ref } from 'vue'
const count = ref(0)

import MyComponent from './MyComponent.vue'

import DynamicComponentA from './Dynamic-ComponentA.vue'
import DynamicComponentB from './Dynamic-ComponentB.vue'
import DynamicComponentC from './Dynamic-ComponentC.vue'
const selected = ref('');
function checkValue() {
    // 進行對應的 許多操作...
    // console.log("selected", selected);
}

// 先跳過 遞迴組件

import * as Form from './form-components.js' 
// https://github.com/vuejs/docs/issues/1267 人家那麼厲害的都問了= =
</script>
<template>
    <button @click="log">{{ msg }}</button>
    <hr>
    <div>{{ capitalize('hello') }}</div>
    <!-- <div>{{ testString('HHHlo') }}</div> -->
    <hr>
    <button @click="count++">{{ count }}</button>
    <hr>
    有效
    <MyComponent />、
    有效<my-component />、
    無效<My-Component />但三者畫面會顯示
    <hr>
    動態組件
    <select v-model="selected" @change="checkValue">
        <option value=A>A</option>
        <option value=B>B</option>
        <option value=C>C</option>
    </select>
    <component :is="DynamicComponentA" /> <br>
    這很重要
    <component :is="selected == 'A' ? DynamicComponentA : selected == 'B' ? DynamicComponentB : DynamicComponentC" />
    <hr>
    <Form.Input>
        <Form.Label>label</Form.Label>
    </Form.Input>
</template>