import { useDebounceFn, useEventBus } from '@vueuse/core'
export const designWidth = 3840
export const scale = ref<number>(window.innerWidth / designWidth)
const changeScale = () => {
  scale.value = window.innerWidth / designWidth
  document.documentElement.style.fontSize = `${scale.value * 16}px`
  resize.emit()
}
const resize = useEventBus('resize')
changeScale()
window.addEventListener('resize', useDebounceFn(changeScale, 500))
