<script setup>
import Login from '../components/login/Login.vue'
import { usePocketBase } from '../composables/usePocketBase';
</script>

<template>
  <main class="w-100">
    <v-sheet class="bg-grey-darken-4 pa-6 border-surface-bright border-sm rounded-lg" rounded>
      <Login v-if="!pb?.authStore.isValid" @refresh="refreshAuthStateView"/>
      <button v-else @click="logout">Ausloggen</button>
    </v-sheet>
  </main>
</template>

<script>
export default {
    data() {
      return {
        pb: null
      }
    },
    async created() {
        return this.refreshAuthStateView();
    },
    methods: {
      async refreshAuthStateView() {
        this.pb = await usePocketBase();
      },
      logout() {
        this.pb.authStore.clear();
        this.refreshAuthStateView();
      }
    }
}
</script>