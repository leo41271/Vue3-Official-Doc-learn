<script>
import FancyButton from './components/solt-docs/FancyButton.vue';
import AwesomeIcon from './components/solt-docs/AwesomeIcon.vue';
import SubmitButton from './components/solt-docs/SubmitButton.vue';
import BaseLayout from './components/solt-docs/BaseLayout.vue';
import DynamicSlotName from './components/solt-docs/DynamicSlotName.vue';
import MyComponent from './components/solt-docs/MyComponent.vue';
import NameScopeSlot from './components/solt-docs/NameScopeSlot.vue';
import FancyList from './components/solt-docs/FancyList.vue'
import MouseTracker from './components/solt-docs/MouseTracker.vue';
export default {
    components: { FancyButton, AwesomeIcon, SubmitButton, BaseLayout, DynamicSlotName, MyComponent, NameScopeSlot, FancyList, MouseTracker },
    data() {
        return {
            dynamicSlotName: ["part1", "part2", "part3", "part4"],
            dynamicSlotValue: ["aaa", "bbb", "ccc", "ddd"]
        }
    }
}
</script>
<template>
    <FancyButton><!-- slot content -->slot基礎使用 該文字替換slot標籤 </FancyButton>
    <!--  -->
    <FancyButton>插槽塞更多東西
        <span style="color:cyan">Click me! </span>
        <AwesomeIcon /><!-- 兩行都是 slot 的內容甚至插槽可插組件 -->
    </FancyButton>
    <!--  -->
    <p>Fallback Content 插槽備案slot內容 與 有給內容</p>
    <SubmitButton /><!-- use fallback text -->
    <SubmitButton>Save</SubmitButton><!-- provide custom text -->
    <!--  -->
    <BaseLayout>
        <template v-slot:header>
            <h3>Named Slots 命名插槽 組件#header部分 </h3>
        </template>
        <template #default>
            <p> #default 部分 slot 沒有命名</p>
            當slot同時使用預設與命名slot,default template可省略不寫，
            all 頂層非 template 會視為 default slot內容
            <AwesomeIcon />
        </template>
        <template #footer>
            <p>#footer(簡寫) v-slot:footer 部分</p>
        </template>
    </BaseLayout>
    <!--  -->
    動態插值命名Dynamic Slot Names (Doc沒有範例)
    <DynamicSlotName>
        <template v-for="(slotName, index) in dynamicSlotName" :key="slotName" #[slotName]>
            {{ dynamicSlotValue[index] }} {{ slotName }}
        </template>
        <p>預設部分這次沒寫template</p>
    </DynamicSlotName><br>
    <DynamicSlotName>
        <template #[dynamicSlotName[0]]>aaa</template>
        <template #[dynamicSlotName[1]]>bbb</template>
        <template #[dynamicSlotName[2]]>ccc</template>
        <template #[dynamicSlotName[3]]>ddd</template>
        <p>預設部分這次沒寫template</p>
    </DynamicSlotName>
    <!--  -->
    <hr>Scoped Slots範圍插槽 (用子組件內容)
    <MyComponent v-slot="slotProps">
        slotProps.text:{{ slotProps.text }} 。 slotProps.count:{{ slotProps.count }}
    </MyComponent>
    <MyComponent v-slot="{ text, count }">
        解構用法也可使用 text:{{ text }} count:{{ count }}
    </MyComponent>
    <!--  -->
    <hr>Named Scoped Slots 命名範圍插槽 。基本上是隸屬於哪一部分的 命名區快要清晰就好 是誰就給誰。
    <name-scope-slot>
        <template #header="headerProps">
            headerProps:{{ headerProps }} headerProps.gg666:{{ headerProps.gg666 }}
        </template>
        <template #default="defaultProps">
            defaultProps.gg666:{{ defaultProps.gg666 }}
        </template>
        <template #footer>
        </template>
    </name-scope-slot>
    <!--  -->
    scoped slots 練習範例
    <FancyList :api-url="url呼叫API的網址或data" :per-page="10">
        <template #item="{ body, username, likes }">
            <div class="item">
                <p>{{ body }}</p>
                <p class="meta">by {{ username }} | {{ likes }} likes。 class:item meta 當前頁面css省略</p>
            </div>
        </template>
    </FancyList>
    <!--  -->
    <hr>Renderless Components
    <MouseTracker v-slot="{ x, y }">
        解構子組件 x y 滑鼠位置: {{ x }}, {{ y }}
    </MouseTracker>
</template>