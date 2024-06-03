<script>// ValueInputBind.vue
export default {
    props: ['modelValue',],
    emits: ['update:modelValue',],
    created() { /*console.log(this.modelValue);*/ }
}
</script>

<template>
    modelValue 是一個預設內建屬性(後面引述會講到)<br>
    預設<input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" /> 
</template>