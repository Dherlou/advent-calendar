<script setup>
import { useRouter } from 'vue-router';
import { usePocketBase } from '@/composables/usePocketBase';
</script>

<template>
    Logout
</template>

<style scoped>
</style>

<script>
export default {
    created() {
        this.logout();
    },
    emits: [
        'refreshAuth'
    ],
    methods: {
        async logout() {
            const router = useRouter();
            const pb = await usePocketBase();

            pb.authStore.clear();
            this.$emit('refreshAuth');

            router.push('/admin');
        }
    }
}
</script>