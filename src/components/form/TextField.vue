<script setup>
</script>

<template>
  <div class="d-flex align-center mb-5">
    <v-text-field
      :clearable="true"
      :persistent-clear=true
      :label="label"
      @change="onFieldChange"
      @click:clear="onClear"
      :modelValue="model"
      type="input"
      variant="outlined"
    />
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    label: String,
    model: String
  },
  emits: [
    'onFieldChange'
  ],
  methods: {
    onClear() {
      this.$emit('onFieldChange', this.name, '');
    },
    onFieldChange(e) {
      this.$emit('onFieldChange', this.name, e.target.value);
    }
  }
}
</script>