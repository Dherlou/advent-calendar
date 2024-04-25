<script setup>
import PocketBase from 'pocketbase';
import CalendarDoor from './CalendarDoor.vue';
import { useEnv } from '../../composables/useEnv'
import { useSettings } from '../../composables/useSettings'
</script>

<template>
    <div id="calendar" :style="{ backgroundImage: `url(${getBackgroundPath()})` }">
        <CalendarDoor v-for="door in doors" :door="door" />
    </div>
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
    data() {
        return {
            env: {},
            settings: {},
            doors: []
        }
    },
    async created() {
        this.env = useEnv();
        this.settings = await useSettings();
        this.doors = await this.loadDoors();
    },
    methods: {
        async loadDoors() {
            const pb = new PocketBase(this.env.api.base);

            const doors = await pb.collection(this.env.api.collectionPrefix+'doors').getFullList({
                sort: 'order'
            });

            const retDoors = [];
            for (var i = 0; i < doors.length; i++) {
                if (i === 12) {
                    retDoors.push({
                        date: -1,
                        content: '',
                        background: this.settings.center ?
                            this.env.api.getFilePath(this.settings.collectionId, this.settings.id, this.settings.center) :
                            '/src/assets/images/cal-center-bg.png'
                    });
                }

                retDoors.push({
                    date: new Date(doors[i].date).getDate(),
                    content: doors[i].content,
                    background: doors[i].background ?
                        this.env.api.getFilePath(doors[i].collectionId, doors[i].id, doors[i].background) :
                        doors[i].background,
                    padding: doors[i].padding
                });
            }

            return retDoors;
        },
        getBackgroundPath() {
            return this.settings.background ?
                this.env.api.getFilePath(this.settings.collectionId, this.settings.id, this.settings.background) :
                '/src/assets/images/cal-bg.png';
        }
    }
}
</script>