<template><!-- Watch-Post.vue -->
    <p>{{ count }}</p>
    <button @click="increment">+</button>
</template>
<script>export default {
    data() { return { count: 0, }; },
    watch: {
        count: {
            handler(val, oldVal) {
                console.log(`count 發生了變化，新值：${val}，舊值：${oldVal}`);
            },
            flush: 'post',
        },
    },
    methods: {
        increment() { this.count++; },
    },
};
</script>