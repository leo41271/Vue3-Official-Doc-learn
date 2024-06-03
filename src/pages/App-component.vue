<script>
import ButtonCounter from "./components/component-docs/Btn.vue";
import BlogPost from "./components/component-docs/BlogPost.vue"; // App.vue
import AlertBox from "./components/component-docs/Alert.vue";
import pack from "./components/component-docs/dynamic-components/dynamic.vue"
import A from "./components/component-docs/dynamic-components/A.vue"
import B from "./components/component-docs/dynamic-components/B.vue"
import C from "./components/component-docs/dynamic-components/C.vue"

export default { // App.vue
    components: {
        ButtonCounter,
        BlogPost,
        AlertBox,
        // pack, // 如何讓組件 一整包 import 讓大家都用? A B C 註解掉
        A, B, C
    },
    data() {
        return {
            posts: [
                { id: 1, title: 'My journey with Vue' },
                { id: 2, title: 'Blogging with Vue' },
                { id: 3, title: 'Why Vue is so fun' }
            ],
            postFontSize: 1,
            ErrMsg: 'Something bad happened.',
            currentTab: 'A',
            tabs: ['A', 'B', 'C'],
        }
    }
}
</script>
<template>
    <h1>開始練習</h1>
    基本使用
    <ButtonCounter />

    <div :style="{ fontSize: postFontSize + 'em' }">
        傳參數 與觸發事件 emit (blog-post 也行)
        <BlogPost v-for="post in posts" :key="post.id" :title="post.title" @enlarge-text="postFontSize += 0.1" />
    </div>

    使用slot
    <AlertBox>{{ ErrMsg }}</AlertBox>

    動態組件
    <button v-for="tab in tabs" :key="tab" @click="currentTab = tab">
        {{ tab }}
    </button>
    <component :is="currentTab" class="tab"></component>
</template>