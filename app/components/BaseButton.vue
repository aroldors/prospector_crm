<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="buttonClasses"
    @click="handleClick"
  >
    <div class="flex items-center justify-center space-x-2">
      <!-- Loading spinner -->
      <svg
        v-if="loading"
        class="animate-spin h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>

      <!-- Icon slot -->
      <slot name="icon" v-if="!loading" />

      <!-- Text content -->
      <span v-if="$slots.default">
        <slot />
      </span>
    </div>
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
}

interface Emits {
  click: [event: Event]
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  loading: false,
  fullWidth: false
})

const emit = defineEmits<Emits>()

const handleClick = (event: Event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}

const buttonClasses = computed(() => {
  const baseClasses = [
    'inline-flex items-center justify-center font-medium transition-all duration-250 focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none'
  ]

  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm rounded-button',
    md: 'px-4 py-2 text-sm rounded-button',
    lg: 'px-6 py-3 text-base rounded-button'
  }

  // Variant classes
  const variantClasses = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500 shadow-sm hover:shadow-md',
    secondary: 'bg-neutral-200 hover:bg-neutral-300 text-neutral-700 focus:ring-neutral-500',
    outline: 'border border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white focus:ring-primary-500',
    ghost: 'text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
    danger: 'bg-error-500 hover:bg-error-600 text-white focus:ring-error-500 shadow-sm hover:shadow-md'
  }

  // Full width
  const widthClass = props.fullWidth ? 'w-full' : ''

  return [
    ...baseClasses,
    sizeClasses[props.size],
    variantClasses[props.variant],
    widthClass
  ].filter(Boolean).join(' ')
})
</script>