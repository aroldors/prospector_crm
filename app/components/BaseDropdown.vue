<template>
  <div class="relative">
    <!-- Dropdown Button -->
    <button 
      @click="toggleDropdown"
      class="w-full flex items-center px-4 py-3 text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors duration-200"
      :class="buttonClass"
    >
      <Icon v-if="icon" :name="icon" class="w-5 h-5 mr-3" />
      <span>{{ label }}</span>
      <Icon 
        name="fa6-solid:chevron-up" 
        class="w-4 h-4 ml-auto transition-transform duration-200"
        :class="{ 'rotate-180': !isOpen }"
      />
    </button>

    <!-- Dropdown Menu -->
    <Transition
      name="dropdown"
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div 
        v-if="isOpen"
        class="absolute z-50 bg-white border border-neutral-200 rounded-lg shadow-lg py-2"
        :class="dropdownPositionClass"
      >
        <DropdownItem
          v-for="item in items"
          :key="item.id"
          :icon="item.icon"
          :label="item.label"
          :variant="item.variant"
          @click="handleItemClick(item)"
        />
      </div>
    </Transition>

    <!-- Backdrop para fechar o dropdown -->
    <div 
      v-if="isOpen"
      class="fixed inset-0 z-0"
      @click="closeDropdown"
    />
  </div>
</template>

<script setup lang="ts">
import type { DropdownItem } from '../../shared/types/dropdown'

// Props
interface Props {
  label: string
  icon?: string
  items: DropdownItem[]
  position?: 'top' | 'bottom'
  buttonClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  position: 'bottom',
  buttonClass: ''
})

// Estado reativo
const isOpen = ref(false)

// Computed
const dropdownPositionClass = computed(() => {
  const baseClass = 'left-6 right-6'
  return props.position === 'top' 
    ? `${baseClass} bottom-full mb-2`
    : `${baseClass} top-full mt-2`
})

// Métodos
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  isOpen.value = false
}

const handleItemClick = async (item: DropdownItem) => {
  closeDropdown()
  await item.action()
}

// Cleanup ao desmontar o componente
onUnmounted(() => {
  closeDropdown()
})
</script>

<style scoped>
/* Estilos para transições já estão definidos nas classes do Tailwind */
</style>