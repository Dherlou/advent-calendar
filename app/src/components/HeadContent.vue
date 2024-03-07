<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <header>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

        <div>
            <h1>Adventskalender</h1>
            <p>Hier findest du jeden Tag ein neues Türchen!</p>

            <nav>
                <RouterLink to="/">Nutzerbereich</RouterLink>
                <RouterLink to="/admin">Administrationsbereich</RouterLink>
            </nav>
        </div>
    </header>
</template>

<style scoped>
header {
    display: flex;
    line-height: 1.5;
    max-height: 100vh;
    padding-bottom: 2rem;
    padding-right: calc(var(--section-gap) / 2);
}

.logo {
    display: block;
    margin: 0 2rem 0 0;
}

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
