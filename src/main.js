// import { createApp } from "vue";
// import App from "./App.vue";
// createApp(App).mount("#app"); // 鍊式寫法
// ----------------------------
// import './assets/main.css' // 全域 css 配置 如果你有的話
import { createApp } from "vue";// main.js
import App from "./App.vue";
const app = createApp(App);// App 是一Vue组件>根组件。所有其他组件都將嵌套在 App 组件内部。
// component gloal 使用範例 。(組件註冊 Component Registration) 
import gloalComponentA from "./components/component-registration/gloalComponentA.vue";
import gloalComponentB from "./components/component-registration/gloalComponentB.vue";
import gloalComponentC from "./components/component-registration/gloalComponentC.vue";
// app.component("GlobalA", gloalComponentA); // 下行為 鏈式寫法
app.component("GlobalA", gloalComponentA)
  .component("GlobalB", gloalComponentB)
  .component("GlobalC", gloalComponentC);

// plugins
import i18nPlugin from "./plugins/i18n";// main.js
app.use(i18nPlugin, {
  greetings: { hello: "Bonjour!" },
});

// directive
app.directive("globalAdd-999", function (el, binding) {
  el.textContent = binding.value + "999"; // 把改變好的內容再指定回去
});
app.directive("global-mutil", (el, binding) => {
  console.log("mutil", binding.value.color);
  console.log("mutil", binding.value.text);
})

// 添加一個全局的自定義方法
app.config.globalProperties.myCustomMethod = function () {
  console.log('這是一個全局的自定義方法！');
};
app.config.globalProperties.myCustomProperty = '這是一個全局的自定義屬性';// 添加一個全局的自定義屬性

const appInstance = app.mount("#app"); // 觀察組件實例 
appInstance.gggg = 0;// appInstance.gggg++;
console.log("proxy", appInstance.person);
console.log("proxy", appInstance);