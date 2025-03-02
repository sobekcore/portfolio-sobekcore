<template>
  <section>
    <div class="field noscript">
      <ToggleField v-model="dark" name="dark" />
      <label for="dark">
        <small>Switch between light and dark mode preview</small>
      </label>
    </div>
    <div>
      <slot v-if="dark" name="dark"></slot>
      <slot v-else name="light"></slot>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { type Ref, ref } from 'vue';
import ToggleField from '@/components/Vue/Base/ToggleField.vue';

const dark: Ref<boolean> = ref(false);
</script>

<style scoped>
section .field {
  display: inline-flex;
  align-items: center;
}

section .field label {
  display: inline-flex;
  margin-left: 0.75rem;
}
</style>
