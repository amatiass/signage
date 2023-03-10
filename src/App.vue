<script setup lang="ts">
import { scale } from './utils/util'
watch(
  () => scale.value,
  (val: number) => (document.documentElement.style.fontSize = `${val * 16}px`),
  { immediate: true }
)
</script>

<template>
  <Main bgi-bg.jpg wfull hfull bgfull />
</template>
