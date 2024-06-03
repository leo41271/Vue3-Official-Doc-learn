<template><!-- Watch-Flush-Post.vue -->
    <!-- Callback Flush Timing <br>
    預設情況下，偵聽器回呼會在父元件更新 (如有) 之後、所屬元件的 DOM 更新之前被調用，<br>
    在偵聽器回呼中存取所屬元件的 DOM，那麼 DOM 將處於更新前的狀態。<br>
    Post Watchers: 取得更新後的。<br> -->
    <p>Counter: {{ counter }}</p>
    <button @click="increment">Increment</button>
</template>
<script>
export default {
    data() { return { counter: 0 }; },
    watch: {
        counter: {
            handler(newValue, oldValue) {
                console.log('Counter 改變了');
                console.log('新值:', newValue);
                console.log('舊值:', oldValue);
            },
            flush: 'post', // 使用 'post' 選項，確保在 Vue 更新 DOM 後才觸發 watcher 回調 
        }
    },
    methods: {
        increment() { this.counter++; }
    }
};
</script>
