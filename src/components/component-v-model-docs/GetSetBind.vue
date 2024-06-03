<script>//<!--GetSetBind.vue -->
export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    computed: {
        value: {
            get() { return this.modelValue },
            set(changeValue) { this.$emit('update:modelValue', changeValue); }
        }
    }
}
</script>

<template>
    <input v-model="value" />
</template>