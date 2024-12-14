<template>
  <input :id="name" v-model="modelValue" :name="name" type="checkbox" role="switch" @change="updateModelValue" />
  <label :for="name">Toggle</label>
</template>

<script lang="ts" setup>
import { type Ref, ref } from 'vue';

const emit = defineEmits({
  'update:modelValue': (modelValue): boolean => {
    return typeof modelValue === 'boolean';
  },
});

const props = defineProps({
  modelValue: {
    type: Boolean,
  },
  name: {
    type: String,
    required: true,
  },
});

const modelValue: Ref<boolean> = ref(props.modelValue);

const updateModelValue = (): void => {
  emit('update:modelValue', modelValue.value);
};
</script>

<style scoped>
input {
  position: absolute;
  width: 0;
  height: 0;
}

label {
  display: inline-flex;
  position: relative;
  width: 3em;
  height: 1.5em;
  color: transparent;
  background: rgb(var(--SECTION_COLOR));
  border-radius: 1.5em;
  cursor: pointer;
  user-select: none;
  transition: background 0.3s ease;
}

label::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 1.5em;
  height: 1.5em;
  background: rgb(var(--WHITE_COLOR));
  background-clip: padding-box;
  border: 0.2em solid transparent;
  border-radius: 1.5em;
  transition:
    background 0.3s ease,
    transform 0.3s ease;
}

input:focus-visible + label {
  outline: 2px solid rgb(var(--TEXT_COLOR));
  outline-offset: 2px;
}

input:checked + label {
  background: rgb(var(--THEME_COLOR));
}

input:checked + label::after {
  background: rgb(var(--WHITE_COLOR));
  background-clip: padding-box;
  transform: translateX(100%);
}
</style>
