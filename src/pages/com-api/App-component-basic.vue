<template>// Composition API style
    <ButtonCounter />
    <hr>
    <ComponentProps v-for="post in posts" :key="post.id" :title="post.title">
    </ComponentProps>
    defineProps 只能< script setup> 中用的編譯巨集指令。 <br>
        defineProps 會傳回一個物件，其中包含可傳遞給元件的所有 props <br>
        没有使用< script setup> 此略
            <hr>
            <div :style="{ fontSize: postFontSize + 'em' }">
                <ComponentEvent v-for="post in posts" :key="post.id" :title="post.title"
                    @enlarge-text="postFontSize += 0.1">
                </ComponentEvent>
                defineEmits 僅可用於 < script setup> (和defineProps相同)<br>
                    傳回(返回)一個等同於 $emit 方法的 emit 函數
            </div>
            <div>slot 與option API 相同略</div>
            <div>Dynamic Components 差不多略</div>
</template>
<script setup>
import ButtonCounter from './components/com-api/component-docs/ComponentBasic.vue'
import { ref } from 'vue'
import ComponentProps from './components/com-api/component-docs/ComponentProps.vue'
import ComponentEvent from './components/com-api/component-docs/ComponentEvent.vue'
const posts = ref([
    { id: 1, title: 'My journey with Vue' },
    { id: 2, title: 'Blogging with Vue' },
    { id: 3, title: 'Why Vue is so fun' }
])
const postFontSize = ref(1)
</script>
