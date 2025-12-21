<template>
  <div :class="wrapperClasses">
    <!-- Label -->
    <label
      v-if="label"
      :for="inputId"
      :class="labelClasses"
    >
      {{ label }}
      <span v-if="required" class="text-error-500 ml-1">*</span>
    </label>

    <!-- Input wrapper with icon support -->
    <div :class="inputWrapperClasses">
      <!-- Leading icon -->
      <div v-if="leadingIcon || $slots.leadingIcon" class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <slot name="leadingIcon">
          <svg v-if="leadingIcon === 'email'" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
          <svg v-else-if="leadingIcon === 'user'" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <svg v-else-if="leadingIcon === 'lock'" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </slot>
      </div>

      <!-- Input element -->
      <input
        :id="inputId"
        ref="inputRef"
        :type="actualType"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :class="inputClasses"
        @input="handleInput"
        @blur="handleBlur"
        @focus="handleFocus"
        @keydown.enter="handleEnter"
      />

      <!-- Password toggle button -->
      <div v-if="type === 'password'" class="absolute inset-y-0 right-0 flex items-center">
        <button
          type="button"
          class="px-3 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-0 active:text-gray-700 transition-colors duration-150 flex items-center justify-center rounded-r-md"
          @click.prevent="togglePasswordVisibility"
        >
          <svg v-if="showPassword" class="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 11-4.243-4.243m4.242 4.242L9.88 9.88" />
          </svg>
          <svg v-else class="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>

      <!-- Trailing icon (only when not password type) -->
      <div v-else-if="trailingIcon || $slots.trailingIcon" class="absolute inset-y-0 right-0 pr-3 flex items-center">
        <slot name="trailingIcon">
          <!-- Add more trailing icons as needed -->
        </slot>
      </div>
    </div>

    <!-- Helper text or error message -->
    <p v-if="helperText || errorMessage" :class="helperTextClasses">
      {{ errorMessage || helperText }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string | number
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
  label?: string
  placeholder?: string
  helperText?: string
  errorMessage?: string
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  fullWidth?: boolean
  leadingIcon?: 'email' | 'user' | 'lock' | string
  trailingIcon?: string
}

interface Emits {
  'update:modelValue': [value: string]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
  enter: [event: KeyboardEvent]
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
  size: 'md',
  disabled: false,
  readonly: false,
  required: false,
  fullWidth: true
})

const emit = defineEmits<Emits>()

const inputRef = ref<HTMLInputElement>()
const isFocused = ref(false)
const showPassword = ref(false)

// Generate unique ID for the input
const inputId = `input-${Math.random().toString(36).substr(2, 9)}`

// Computed type for password toggle
const actualType = computed(() => {
  if (props.type === 'password' && showPassword.value) {
    return 'text'
  }
  return props.type
})

// Toggle password visibility
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false
  emit('blur', event)
}

const handleEnter = (event: KeyboardEvent) => {
  emit('enter', event)
}

// Expose input methods
const focus = () => {
  inputRef.value?.focus()
}

const blur = () => {
  inputRef.value?.blur()
}

defineExpose({ focus, blur })

// Computed classes
const wrapperClasses = computed(() => {
  const baseClasses = ['flex flex-col space-y-1']
  const widthClass = props.fullWidth ? 'w-full' : ''
  
  return [baseClasses, widthClass].filter(Boolean).join(' ')
})

const labelClasses = computed(() => {
  const baseClasses = 'block text-sm font-medium'
  const colorClasses = props.errorMessage 
    ? 'text-error-700' 
    : 'text-neutral-700'
  
  return [baseClasses, colorClasses].join(' ')
})

const inputWrapperClasses = computed(() => {
  return 'relative flex items-center'
})

const inputClasses = computed(() => {
  const baseClasses = [
    'block w-full border transition-colors duration-250',
    'placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-offset-0',
    'disabled:bg-neutral-50 disabled:text-neutral-500 disabled:cursor-not-allowed',
    'readonly:bg-neutral-50 readonly:cursor-default'
  ]

  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-3 py-2 text-sm rounded-md',
    lg: 'px-4 py-3 text-base rounded-md'
  }

  // State-dependent classes
  const stateClasses = props.errorMessage
    ? 'border-error-300 text-error-900 focus:border-error-500 focus:ring-error-500'
    : isFocused.value
      ? 'border-primary-500 ring-primary-500'
      : 'border-neutral-300 text-neutral-900 focus:border-primary-500 focus:ring-primary-500'

  // Icon padding
  const hasLeadingIcon = !!(slots.leadingIcon || props.leadingIcon)
  const hasTrailingIcon = !!(slots.trailingIcon || props.trailingIcon || props.type === 'password')
  
  let iconPadding = ''
  if (hasLeadingIcon && hasTrailingIcon) {
    iconPadding = 'pl-10 pr-12'
  } else if (hasLeadingIcon) {
    iconPadding = 'pl-10'
  } else if (hasTrailingIcon) {
    iconPadding = props.type === 'password' ? 'pr-12' : 'pr-10'
  }

  return [
    ...baseClasses,
    sizeClasses[props.size],
    stateClasses,
    iconPadding
  ].filter(Boolean).join(' ')
})

const helperTextClasses = computed(() => {
  const baseClasses = 'text-xs'
  const colorClasses = props.errorMessage 
    ? 'text-error-600' 
    : 'text-neutral-500'
  
  return [baseClasses, colorClasses].join(' ')
})

// Get slots reference
const slots = useSlots()
</script>