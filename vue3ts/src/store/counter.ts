// 1.在src目录下创建 store 文件
// 2.新增 counter.ts 测试仓库,代码如下

// counter.ts
import { defineStore } from "pinia";
import { computed, ref } from 'vue'
// defineStore 接受两个参数
//  参数1：仓库的id（字符串）
//  参数2：options（对象）
export const useCounterStore = defineStore('counter', () => {
    // 定义数据
    const counter = ref(100)
    
    // 定义计算属性
    const counterComputer = computed(() => {
        return counter.value * 2
    })
    
    // 定义方法
    const add = () => {
        counter.value++
    }
    return {
        counter,
        add,
        counterComputer
    }
})