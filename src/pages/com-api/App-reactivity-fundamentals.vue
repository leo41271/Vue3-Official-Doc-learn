<script>
// Composition API style 
import WhyRef from '@/components/com-api/reactivity-fundamentals-docs/Why-Ref.vue'
import RefDeep from '@/components/com-api/reactivity-fundamentals-docs/Ref-Deep.vue'
import DOMNextTick from '@/components/com-api/reactivity-fundamentals-docs/DOM-NextTick.vue'
import Reactive from '@/components/com-api/reactivity-fundamentals-docs/Reactive.vue'
import ReactiveLimitation from '@/components/com-api/reactivity-fundamentals-docs/Reactive-Limitation.vue'
import RefDetial from '@/components/com-api/reactivity-fundamentals-docs/Ref-Detial.vue'
export default {
    components: { WhyRef, RefDeep, DOMNextTick, Reactive, ReactiveLimitation, RefDetial },
}
</script>
<template>
    <WhyRef></WhyRef>
    <hr>
    <RefDeep></RefDeep>
    <hr>
    <DOMNextTick></DOMNextTick>
    <hr>
    <Reactive></Reactive>
    <hr>
    <ReactiveLimitation></ReactiveLimitation>
    <hr>
    <RefDetial></RefDetial>
</template>