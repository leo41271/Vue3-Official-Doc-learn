<template><!-- DynamicSlotName.vue -->
    <part1>
        <slot name="part1"></slot>
    </part1>
    <part2>
        <slot name="part2"></slot>
    </part2>
    <div>
        <slot></slot>
    </div>
    <part3>
        <slot name="part3"></slot>
    </part3>
    <part4>
        <slot name="part4"></slot>
    </part4>
</template>
<style>
part1 {
    color: green;
}
part2 {
    color: yellow;
}
part3 {
    color: blue;
}
part4 {
    color: red;
}
</style>