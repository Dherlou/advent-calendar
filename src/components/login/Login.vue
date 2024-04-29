<script setup>

</script>

<template>
    <v-card class="mx-auto w-50 px-6 py-8">
        <v-form class="d-flex flex-column">
            <v-text-field
                label="Benutzername"
                variant="outlined"
            ></v-text-field>
            <v-text-field
                label="Passwort"
                type="password"
                variant="outlined"
            ></v-text-field>

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
#calendar {
    background-color: rgb(255, 66, 66);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border: 1px solid #fff;
    border-radius: 0.6rem;
    gap: 2rem;
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-template-rows: auto;
    height: auto;
    padding: 2rem;
    margin: 0 auto;
    width: 100%;
}
</style>

<script>
export default {
}
</script>