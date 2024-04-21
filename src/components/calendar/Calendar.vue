<script setup>
import PocketBase from 'pocketbase';
import CalendarDoor from './CalendarDoor.vue';
</script>

<template>
    <div id="calendar">
        <CalendarDoor v-if="loaded" v-for="door in doors" :door="door" />
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
            // images: https://picsum.photos/200/200
            apiBase: import.meta.env.VITE_API_BASE,
            apiCollectionPrefix: import.meta.env.VITE_API_COLLECTION_PREFIX,
            loaded: false
        }
    },
    async created() {
        const pb = new PocketBase(this.apiBase);

        const doors = await pb.collection(this.apiCollectionPrefix+'doors').getFullList({
            sort: 'order'
        });

        console.log(doors);

        this.doors = [];
        for (var i = 0; i < doors.length; i++) {
            if (i === 12) {
                this.doors.push({
                    date: -1,
                    content: '',
                    background: 'TODO' // use settings entry propagated here
                });
            }

            this.doors.push({
                date: new Date(doors[i].date).getDate(),
                content: doors[i].content,
                background: this.apiBase+'/api/files/'+doors[i].collectionId+'/'+doors[i].id+'/'+doors[i].background
            });
        }

        this.loaded = true;
    }
}
</script>