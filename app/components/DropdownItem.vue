<template>
  <button
    @click="$emit('click')"
    class="w-full flex items-center px-4 py-2 text-left transition-colors duration-200"
    :class="variantClasses"
  >
    <Icon v-if="icon" :name="icon" class="w-4 h-4 mr-3" />
    <span>{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
// Props
interface Props {
  icon?: string
  label: string
  variant?: 'default' | 'danger'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default'
})

// Emits
defineEmits<{
  click: []
}>()

// Computed
const variantClasses = computed(() => {
  const baseClass = 'focus:outline-none focus:ring-2 focus:ring-inset'
  
  switch (props.variant) {
    case 'danger':
      return `${baseClass} text-red-700 hover:bg-red-50 focus:ring-red-500`
    case 'default':
    default:
      return `${baseClass} text-neutral-700 hover:bg-neutral-100 focus:ring-primary-500`
  }
})
</script>