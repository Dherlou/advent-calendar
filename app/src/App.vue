<script setup>
import HeadContent from './components/HeadContent.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <HeadContent />
  <RouterView />
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>