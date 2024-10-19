<script setup>
import DefaultLogo from '@/assets/images/logo.png';
import DefaultCalendarBackground from '@/assets/images/cal-bg.png';
import DefaultCalenderCenterBackground from '@/assets/images/cal-center-bg.png';
import ImageField from '@/components/form/ImageField.vue';
import TextField from '@/components/form/TextField.vue';
import AdminNavigation from '@/components/layout/AdminNavigation.vue';
import { useEnv } from '@/composables/useEnv';
import { usePocketBase } from '@/composables/usePocketBase';
import { useSettings } from '@/composables/useSettings';
</script>

<template>
  <AdminNavigation />
  <v-card class="mx-auto w-50 px-6 py-8" variant="text">
    <v-card-title>Einstellungen</v-card-title>
    <v-card-text>
      <v-form class="d-flex flex-column">
        <v-card-subtitle class="mb-3 font-weight-medium">Kopfbereich</v-card-subtitle>

        <ImageField
          accept="image/x-icon"
          :clearable="!!settings['favicon']"
          height="32px"
          label="Favicon"
          name="favicon"
          :url="getImageURL('favicon', DefaultLogo)"
          @onFieldChange="onFieldChange"
        />

        <ImageField
          :clearable="!!settings['logo']"
          height="125px"
          label="Logo"
          name="logo"
          :url="getImageURL('logo', DefaultLogo)"
          @onFieldChange="onFieldChange"
        />

        <TextField
          label="Titel"
          name="title"
          :model="settings['title']"
          @onFieldChange="onFieldChange"
        />

        <v-textarea v-model="settings['intro']" label="Einleitung" variant="outlined"></v-textarea>

        <v-card-subtitle class="mt-10 mb-3 font-weight-medium">Kalender</v-card-subtitle>
        <ImageField
          :clearable="!!settings['background']"
          height="125px"
          label="Hintergrund"
          name="background"
          :url="getImageURL('background', DefaultCalendarBackground)"
          @onFieldChange="onFieldChange"
        />
        <ImageField
          :clearable="!!settings['center']"
          height="125px"
          label="Mitteltürchen"
          name="center"
          :url="getImageURL('center', DefaultCalenderCenterBackground)"
          @onFieldChange="onFieldChange"
        />
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      env: useEnv(),
      pb: null,
      settings: {},
      error: null
    };
  },
  emits: [
    'refreshAuth'
  ],
  async created() {
    this.env = useEnv();
    this.pb = await usePocketBase();
    this.loadSettings();
  },
  methods: {
    async loadSettings() {
      this.settings = await useSettings();
    },
    getImageURL(field, defaultPath) {
      return this.settings[field] ?
        this.env.api.getFilePath(this.settings.collectionId, this.settings.id, this.settings[field]) :
        defaultPath;
    },
    async onFieldChange(name, file) {
      if (!this.pb) {
        return;
      }

      const formData = new FormData();
      formData.append(name, file);
      
      await this.pb.collection(this.env.api.collectionPrefix + 'settings').update(this.settings['id'], formData);
      this.loadSettings();
    },
  }
}
</script>