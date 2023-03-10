import { designWidth } from '~/design'
const { width } = useWindowSize()
export const scale = computed(() => width.value / designWidth)
/**
 * 将像素按比例转换为正确的值
 * @export
 * @param {number} n 像素值
 * @returns {*} 转换后的值
 */
export function px(n: number): `${number}px` {
  return `${scale.value * n}px`
}
