<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="mt-0 mb-3">
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