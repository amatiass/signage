<script setup lang="ts">
import { pie } from './charts/pie'
import { useDateFormat, useNow } from '@vueuse/core'
const time = useDateFormat(useNow(), 'YYYY年MM月DD日 HH时mm分ss秒')
</script>

<template>
  <div>
    <div bgi-head_bg.png h-210>
      <div h-160 flex-center>
        <span font-700 text-80 c-white>大屏可视化看板通用模版</span>
        <span absolute right-30 text-40 c-white>{{ time }}</span>
      </div>
    </div>
    <div w3840 h1900 flex justify-around m-auto>
      <div w1000 flex="~ col" justify-between>
        <div wfull h600 class="chartBorder"><Echarts :option="pie" w-900 h-500 m-50 /></div>
        <div wfull h600 class="chartBorder"><Echarts :option="pie" w-900 h-500 m-50 /></div>
        <div wfull h600 class="chartBorder"><Echarts :option="pie" w-900 h-500 m-50 /></div>
      </div>
      <div w1500 flex="~ col" justify-between></div>
      <div w1000 flex="~ col" justify-between>
        <div wfull h600 class="chartBorder"><Echarts :option="pie" w-900 h-500 m-50 /></div>
        <div wfull h600 class="chartBorder"><Echarts :option="pie" w-900 h-500 m-50 /></div>
        <div wfull h600 class="chartBorder"><Echarts :option="pie" w-900 h-500 m-50 /></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.chartBorder {
  --at-apply: b-1 b-solid b-[#19ba8b2b];
  &::before {
    --at-apply: 'w-20 h-20 absolute top-0 left-0  content-empty';
    --at-apply: 'b-t-2 b-t-solid b-t-#02a6b5';
    --at-apply: 'b-l-2 b-l-solid b-l-#02a6b5';
  }
  &::after {
    --at-apply: 'w-20 h-20 absolute right-0 bottom-0  content-empty';
    --at-apply: 'b-b-2 b-b-solid b-b-#02a6b5';
    --at-apply: 'b-r-2 b-r-solid b-r-#02a6b5';
  }
}
</style>
