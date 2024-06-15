<script setup>
import ImageField from '../components/form/ImageField.vue';
import AdminNavigation from '../components/layout/AdminNavigation.vue';
import { useEnv } from '../composables/useEnv';
import { usePocketBase } from '../composables/usePocketBase';
import { useSettings } from '../composables/useSettings';
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
          height="100%"
          label="Favicon"
          name="favicon"
          :url="getImageURL('favicon', '/src/assets/images/logo.png')"
          @onFieldChange="onFieldChange"
        />

        <v-text-field v-model="settings['logo']" label="Logo" variant="outlined"></v-text-field>
        <v-text-field v-model="settings['title']" label="Titel" variant="outlined"></v-text-field>
        <v-textarea v-model="settings['intro']" label="Einleitung" variant="outlined"></v-textarea>

        <v-card-subtitle class="mb-3 font-weight-medium">Kalender</v-card-subtitle>
        <v-text-field v-model="settings['background']" label="Hintergrund" variant="outlined"></v-text-field>
        <v-text-field v-model="settings['center']" label="Mitteltürchen" variant="outlined"></v-text-field>
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