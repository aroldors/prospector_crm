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
          <Icon v-if="leadingIcon === 'email'" name="fa6-solid:envelope" class="h-5 w-5 text-gray-400" />
          <Icon v-else-if="leadingIcon === 'user'" name="fa6-solid:user" class="h-5 w-5 text-gray-400" />
          <Icon v-else-if="leadingIcon === 'lock'" name="fa6-solid:lock" class="h-5 w-5 text-gray-400" />
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
          <Icon v-if="showPassword" name="fa6-solid:eye-slash" class="h-5 w-5 flex-shrink-0" />
          <Icon v-else name="fa6-solid:eye" class="h-5 w-5 flex-shrink-0" />
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

// Generate unique ID for the input using useId
const inputId = useId()

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