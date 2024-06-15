<script setup>
</script>

<template>
  <div class="d-flex align-center mb-5">
    <v-file-input
      :accept="accept || 'image/png, image/jpeg, image/gif, image/webp, image/tiff, image/bmp, image/avif, image/svg+xml'"
      :key="url"
      :label="label"
      prepend-icon=""
      @change="onFieldChange"
      variant="outlined"
    />
    <img class="ms-3" :alt="name" :src="url" width="auto" :height="height" />
  </div>
</template>

<style>

</style>

<script>
export default {
  props: {
    accept: String,
    name: String,
    label: String,
    height: String,
    url: String
  },
  emits: [
    'onFieldChange'
  ],
  methods: {
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