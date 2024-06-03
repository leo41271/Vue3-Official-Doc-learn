<!-- ChildComponent.vue -->
<template>
    <div>
        <h3>子組件</h3>
        <button @click="sendMessageToParent">向父組件發送消息</button>
    </div>
</template>

<script>
export default {
    methods: {
        sendMessageToParent() {
            this.$emit('childEvent', '來自子組件的消息！');
        }
    }
}
</script>
