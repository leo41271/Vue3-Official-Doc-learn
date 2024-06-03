<template><!-- Watch-Stop.vue -->
    <input v-model="data" placeholder="输入一些内容" />
    <p>data : {{ data }}</p>
    <button @click="stopWatcher">stop Watch</button>
</template>
<script>
export default {
    data() {
        return { data: '' };
    },
    created() {
        // 创建一个观察者
        this.unwatch = this.$watch('data', this.handleFooChange);
    },
    methods: {
        handleFooChange(newValue, oldValue) {
            console.log(oldValue, '=>', newValue);
        },
        stopWatcher() {
            // console.log(this.unwatch);
            // console.log(this.unwatch()); // 這樣也會殺掉 監聽
            this.unwatch();
        },
    }
};
</script>