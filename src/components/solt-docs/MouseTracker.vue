<script>// <!-- MouseTracker.vue -->
export default {
    data() {
        return { x: 0, y: 0 }
    },
    methods: {
        update(e) {
            this.x = e.pageX; // 滑鼠座標
            this.y = e.pageY;
        }
    },
    mounted() { window.addEventListener('mousemove', this.update) },
    unmounted() { window.removeEventListener('mousemove', this.update) },
}
</script>
<template>
    <slot :x="x" :y="y" />
</template>