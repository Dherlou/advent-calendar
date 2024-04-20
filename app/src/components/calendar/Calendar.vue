<script setup>
import CalendarDoor from './CalendarDoor.vue';
</script>

<template>
    <div id="calendar">
        <CalendarDoor v-for="door in doors" :door="door" />
    </div>
</template>

<style scoped>
#calendar {
    background-color: rgb(255, 32, 32);
    background-image: url("/calendar-bg.jpg");
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
    data() {
        return {
            doors: Array.from({ length: 25 }, (_, idx) => ({
                id: idx + 1,
                content: "<h1>Tag <strong>"+(idx+1)+"</strong></h1><p>Inhalt</p>",
                background: ""/*"https://picsum.photos/200/200"*/
            }))
        }
    }
}
</script>