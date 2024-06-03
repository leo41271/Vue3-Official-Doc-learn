<template><!-- Watch-Stop-Choose.vue -->
    <div>
        data<input type="text" v-model="data" placeholder="輸入data訊息"> <br>
        torch<input type="text" v-model="torch" placeholder="輸入torch訊息"><br>
        message<input type="text" v-model="message" placeholder="輸入message訊息"><br>
        <button @click="stopWatchers(kill)">停止 watcher</button>
        <select v-model="kill" id="killName">
            <option value="data">砍掉data監聽器</option>
            <option value="torch">砍掉torch監聽器</option>
            <option value="message">砍掉message監聽器</option>
            <option value="all">砍掉all</option>
        </select><br>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: '123',
            data: "一二三",
            torch: "火炬",
            kill: "",
        };
    },
    watch: {
        message(newV, oldV) { console.log("new ", newV, "old", oldV); },
        data(newV, oldV) { console.log("new ", newV, "old", oldV); },
        torch(newV, oldV) { console.log("new ", newV, "old", oldV); },
    },
    methods: {
        stopWatchers(killWatch) {
            const watchers = this.$options.watch;
            console.log(watchers, killWatch); // 有取得到 三個監聽器
            // 判断是否需要停止所有观察者
            console.log(watchers[killWatch]) // 等同 watchers.data 。尤其內容看與正統stop console比較內容 應該是無法stop 因為沒有定義如何停止
            const unwatch = watchers[killWatch];
            console.log(unwatch()); // undefined
            // how to stop watcher without unwatch() in vue ?? 
            if (killWatch === 'all') { Object.keys(watchers).forEach(prop => { }); }
            else {
                if (watchers[killWatch]) { }
                else { console.log("找不到" + killWatch + "的观察者"); }
            }
        }
    }
};
</script>