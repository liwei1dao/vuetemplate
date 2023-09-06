<template >
  <v-container fluid>
      <h1>{{ msg }}</h1>
      <h1>数量：{{ store.counter }}</h1>
      <h2>计算属性：{{ store.counterComputer }}</h2>
      <button @click="store.add">点我加加</button>
      <hr />
      <h1>数量：{{ counter }}</h1>
      <h2>计算属性：{{ counterComputer }}</h2>
      <button @click="add">点我加加</button>
      <div class="card">
          <button type="button" @click="count++">count is {{ count }}</button>
          <p>
          Edit
          <code>components/HelloWorld.vue</code> to test HMR
          </p>
      </div>

      <p>
          Check out
          <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
          >create-vue</a
          >, the official Vue + Vite starter
      </p>
      <p>
          Install
          <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
          in your IDE for a better DX
      </p>
      <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  </v-container>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useCounterStore } from "@/store/counter";
import { storeToRefs } from "pinia";

// 普通用法
const store = useCounterStore();
// 解构用法
//  注意：方法可以直接解构使用，但ref、计算属性等直接解构使用，会失去响应式
//  若要解构ref、计算属性，需结合pinia提供的 storeToRefs 方法进行使用
const { add } = store;
const { counter, counterComputer } = storeToRefs(store);
defineProps<{ msg: string }>();

const count = ref(0);
</script>
<style>
  
</style>