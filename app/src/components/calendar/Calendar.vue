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
            doors: [
                {
                    id: 1,
                    content: "<h1>Tag <strong>1</strong></h1><p>Inhalt</p>",
                    background: ""
                },
                {
                    id: 2,
                    content: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/HxL19VWL9TM?si=FMqXW8oICKAqRcSl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
                    background: ""
                },
                {
                    id: 3,
                    content: "",
                    background: ""
                },
                {
                    id: 4,
                    content: "",
                    background: ""
                },
                {
                    id: 5,
                    content: "",
                    background: ""
                },
                {
                    id: 6,
                    content: "",
                    background: ""
                },
                {
                    id: 7,
                    content: "",
                    background: ""
                },
                {
                    id: 8,
                    content: "",
                    background: ""
                },
                {
                    id: 9,
                    content: "",
                    background: ""
                },
                {
                    id: 10,
                    content: "",
                    background: ""
                },
                {
                    id: 11,
                    content: "",
                    background: ""
                },
                {
                    id: 12,
                    content: "",
                    background: ""
                },
                {
                    id: -1,
                    content: "",
                    background: "https://picsum.photos/200/200"
                },
                {
                    id: 13,
                    content: "",
                    background: ""
                },
                {
                    id: 14,
                    content: "",
                    background: ""
                },
                {
                    id: 15,
                    content: "",
                    background: ""
                },
                {
                    id: 16,
                    content: "",
                    background: ""
                },
                {
                    id: 17,
                    content: "",
                    background: ""
                },
                {
                    id: 18,
                    content: "",
                    background: ""
                },
                {
                    id: 19,
                    content: "",
                    background: ""
                },
                {
                    id: 20,
                    content: "",
                    background: ""
                },
                {
                    id: 21,
                    content: "",
                    background: ""
                },
                {
                    id: 22,
                    content: "",
                    background: ""
                },
                {
                    id: 23,
                    content: "",
                    background: ""
                },
                {
                    id: 24,
                    content: "",
                    background: ""
                }
            ]
        }
    }
}
</script>