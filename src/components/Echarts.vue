<script setup lang="ts">
import type { ECBasicOption } from 'echarts/types/dist/shared'
import { use } from 'echarts/core'
import VChart from 'vue-echarts'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import { GridComponent, TooltipComponent } from 'echarts/components'
import { useEventBus } from '@vueuse/core'

use([CanvasRenderer, BarChart, GridComponent, TooltipComponent])
const props = defineProps<{
  option: ECBasicOption
}>()

const resize = useEventBus('resize')
const echart = ref()
resize.on(() => echart.value.resize())
</script>

<template>
  <v-chart ref="echart" :option="props.option" autoesize />
</template>
