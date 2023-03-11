import { scale } from '~/scale'

export const pie = computed(() => ({
  //  backgroundColor: '#00265f',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '0%',
    top: '10px',
    right: '0%',
    bottom: '4%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['商超门店', '教育培训', '房地产', '生活服务', '汽车销售', '旅游酒店', '五金建材'],
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,.1)',
          width: 2 * scale.value,
          type: 'solid'
        }
      },

      axisTick: {
        show: false
      },
      axisLabel: {
        interval: 0,
        show: true,
        splitNumber: 15,
        color: 'rgba(255,255,255,.6)',
        fontSize: 24 * scale.value
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        show: true,
        color: 'rgba(255,255,255,.6)',
        fontSize: 24 * scale.value
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,.1	)',
          width: 2 * scale.value,
          type: 'solid'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.1)'
        }
      }
    }
  ],
  series: [
    {
      type: 'bar',
      data: [200, 300, 300, 900, 1500, 1200, 600],
      barWidth: '35%',
      itemStyle: {
        color: '#2f89cf',
        opacity: 1,
        borderRadius: 10 * scale.value
      }
    }
  ]
}))
