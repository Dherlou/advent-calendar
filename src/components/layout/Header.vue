<script setup>
import { RouterLink } from 'vue-router'
import { useFavicon } from '@vueuse/core'
import DefaultLogo from '@/assets/images/logo.png'
import { useEnv } from '@/composables/useEnv'
import { useSettings } from '@/composables/useSettings'
</script>

<template>
    <header>
        <img alt="Vue logo" class="logo" :src="getLogoPath()" width="auto" height="100%" />

        <div>
            <h1 class="title">{{ settings.title || 'Adventskalender' }}</h1>
            <div class="intro" v-html="settings.intro || 'Hier findest du jeden Tag ein neues Türchen!'"></div>

            <nav>
                <RouterLink to="/">Nutzerbereich</RouterLink>
                <RouterLink to="/admin">Administrationsbereich</RouterLink>
            </nav>
        </div>
    </header>
</template>

<style>
.intro > p {
    margin-bottom: 0.5em;
}

</style>
<style scoped>
header {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
    max-height: 100vh;
    padding-bottom: 2rem;
    padding-right: calc(var(--section-gap) / 2);
}

.logo {
    display: block;
    margin: 0 2rem 0 0;
    max-height: 175px;
}

.title {
    margin-bottom: 0.25em;
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

<script>
export default {
    data() {
        return {
            env: {},
            settings: {}
        }
    },
    async created() {
        this.env = useEnv();
        this.settings = await useSettings();

        if (this.settings.favicon) {
            const favicon = useFavicon();
            favicon.value = this.env.api.getFilePath(this.settings.collectionId, this.settings.id, this.settings.favicon);
        }
    },
    methods: {
        getLogoPath() {
            return this.settings.logo ?
                this.env.api.getFilePath(this.settings.collectionId, this.settings.id, this.settings.logo):
                DefaultLogo;
        }
    }
}
</script>