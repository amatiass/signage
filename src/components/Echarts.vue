<script setup lang="ts">
import type { ECBasicOption } from 'echarts/types/dist/shared'
import { use } from 'echarts/core'
import VChart from 'vue-echarts'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import { GridComponent, TooltipComponent } from 'echarts/components'

use([CanvasRenderer, BarChart, GridComponent, TooltipComponent])
const props = defineProps<{
  option: ECBasicOption
}>()
</script>

<template>
  <v-chart :option="props.option" />
</template>
