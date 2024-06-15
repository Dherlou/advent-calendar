<script setup>
</script>

<template>
  <div class="d-flex align-center mb-5">
    <v-file-input
      :accept="accept || 'image/png, image/jpeg, image/gif, image/webp, image/tiff, image/bmp, image/avif, image/svg+xml'"
      :clearable="clearable"
      :key="url"
      :label="label"
      prepend-icon=""
      @change="onFieldChange"
      variant="outlined"
    />
    <div class="d-flex flex-column align-center ms-3">
      <img :alt="name" :src="url" width="auto" :height="height" />
      <v-btn v-if="clearable" density="compact" rounded="xl" size="small" variant="outlined" @click="clearField">Löschen</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    accept: String,
    clearable: Boolean,
    name: String,
    label: String,
    height: String,
    url: String
  },
  emits: [
    'onFieldChange'
  ],
  methods: {
    clearField() {
      this.$emit('onFieldChange', this.name, '');
    },
    onFieldChange(e) {
      let file = e.target.files[0] ?? null;

      if (!file) {
        return;
      }

      this.$emit('onFieldChange', this.name, file);
    }
  }
}
</script>