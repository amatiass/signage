import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [['flex-center', 'flex justify-center items-center']],
  rules: [
    [
      /^bgi-(.*)$/,
      ([, d]) => {
        const path = `${/(http|https):\/\/([\w.]+\/?)\S*/.test(d) ? '' : '~/assets/'}`
        return {
          'background-image': `url('${path}${d}')`,
          'background-size': '100% 100%;',
          'background-repeat': 'no-repeat'
        }
      }
    ]
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({ scale: 1.5, warn: true }),
    presetTypography()
  ],
  //  No unit means px: w-100 -> width:25rem
  postprocess: (util: any) => {
    util.entries.forEach((i: any) => {
      const value = i[1]
      if (value && typeof value === 'string' && /^-?[\\.\d]+rem$/.test(value))
        i[1] = `${+value.slice(0, -3) / 4}rem`
    })
  },
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
