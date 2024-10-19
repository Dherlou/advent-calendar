<script setup>
import { ref } from 'vue';
import { VueDraggable } from 'vue-draggable-plus';
import DefaultCalendarCenterBackground from '@/assets/images/cal-center-bg.png';
import AdminNavigation from '@/components/layout/AdminNavigation.vue'
import { useEnv } from '@/composables/useEnv';
import { usePocketBase } from '@/composables/usePocketBase';
import { useSettings } from '@/composables/useSettings';
</script>

<template>
  <AdminNavigation />
  <VueDraggable
    v-model="doors"
    animation="150"
    ref="draggable"
    max-width="100%"
    class="d-flex flex-sm-wrap"
    filter=".fixed"
  >
    <!-- TOOD: make component, add callbacks to persist and abort if moved item is filler -->
    <div
      v-for="door in doors" :key="door.order"
      :class="door.order === 13 ? 'fixed' : ''"
      :style="{
        width: '17%'
      }">
      <div :class="'d-flex bg-grey-darken-3 rounded-lg ma-3' + (door.order === 13 ? '' : ' cursor-move')">
        <img
          :src="door.background ? env.api.getFilePath(door.collectionId, door.id, door.background) : DefaultCalendarCenterBackground"
          :style="{
            height: 'auto',
            width: '50%'
          }">
        <div v-if="door.date" class="pa-2 d-flex justify-center align-center">
          <div>Türchen {{ door.date.split(' ')[0].split('-')[2] }}</div>
        </div>
      </div>
    </div>
  </VueDraggable>
</template>

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
  emits: [
    'refreshAuth'
  ],
  methods: {
    async loadDoors() {
      const pb = await usePocketBase();

      const doors = await pb.collection(this.env.api.collectionPrefix + 'doors').getFullList({
        sort: 'order'
      });

      const retDoors = [];
      for (var i = 0; i < doors.length; i++) {
        if (i === 12) {
          retDoors.push({
            date: '',
            order: 13
          });
        }

        retDoors.push({
          ...doors[i],
          order: doors[i].order > 12 ? doors[i].order+1 : doors[i].order
        });
      }

      return retDoors;
    }
  }
}
</script>