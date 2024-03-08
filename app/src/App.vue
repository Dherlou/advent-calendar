<script setup>
import Header from './components/layout/Header.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <Header />
  <RouterView />
</template>

<style>
* {
  box-sizing: border-box;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>