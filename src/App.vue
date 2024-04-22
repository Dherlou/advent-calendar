<script setup>
import { RouterView } from 'vue-router';

import Header from './components/layout/Header.vue';
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
