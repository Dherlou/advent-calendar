<script setup>
import { usePocketBase } from '../../composables/usePocketBase'
</script>

<template>
    <v-card class="mx-auto w-50 px-6 py-8">
        <v-form class="d-flex flex-column" v-on:submit.prevent="login">
            <v-text-field
                v-model="username"
                label="Benutzername"
                variant="outlined"
            ></v-text-field>
            <v-text-field
                v-model="password"
                v-on:keyup.13="login"
                label="Passwort"
                type="password"
                variant="outlined"
            ></v-text-field>
            <span v-if="error" class="error">{{error}}</span>

            <br/>
    
            <v-btn
                class="mx-auto"
                color="success"
                size="large"
                type="submit"
                variant="elevated"
            >
                Anmelden
            </v-btn>
        </v-form>
    </v-card>
</template>

<style scoped>
.error {
    color: red;
}
</style>

<script>
export default {
    data() {
        return {
            username: null,
            password: null,
            error: null
        };
    },
    methods: {
        async login() {
            const pb = await usePocketBase();

            try {
                await pb.collection('users').authWithPassword(this.username || '', this.password || '');
                this.$emit('refresh');
            } catch (error) {
                this.error = "Ungültiger Benutzername und/oder Passwort!";
            }

            return Promise.resolve();
        }
    }
}
</script>