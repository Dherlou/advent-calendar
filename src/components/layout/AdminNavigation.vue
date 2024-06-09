<script setup>
import { RouterLink } from 'vue-router'
import { useFavicon } from '@vueuse/core'
import { useEnv } from '../../composables/useEnv'
import { useSettings } from '../../composables/useSettings'
</script>

<template>
    <nav>
        <RouterLink to="/admin/doors">Türchen</RouterLink>
        <RouterLink to="/admin/settings">Einstellungen</RouterLink>
        <RouterLink to="/admin/logout">Ausloggen</RouterLink>
    </nav>
</template>

<style scoped>
nav {
    font-size: 1rem;
    margin-top: 1rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}
</style>

<script>
export default {
}
</script>