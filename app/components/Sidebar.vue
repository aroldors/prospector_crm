<template>
  <aside :class="['h-screen bg-white shadow-lg border-r border-neutral-200 flex flex-col transition-all duration-200', collapsed ? 'w-20' : 'w-64']">
    <!-- Cabeçalho -->
    <div class="p-4 border-b border-neutral-200 flex items-center justify-between">
      <div class="flex items-center">
        <Icon v-if="!collapsed" name="fa6-solid:rocket" class="w-6 h-6 text-primary-600" />
        <div v-if="!collapsed" class="ml-3">
          <h2 class="text-xl font-semibold text-neutral-800">ProspectorCRM</h2>
          <p class="text-sm text-neutral-500 mt-1">Painel de Controle</p>
        </div>
      </div>

      <button
        @click="toggleCollapsed"
        class="p-2 rounded hover:bg-primary-100 hover:text-primary-700"
        :aria-expanded="!collapsed"
        :title="collapsed ? 'Abrir sidebar' : 'Fechar sidebar'"
      >
        <Icon name="fa6-solid:chevron-left" :class="['w-4 h-4 transition-transform', collapsed ? 'rotate-180' : '']" />
      </button>
    </div>

    <!-- Conteúdo Principal -->
    <nav class="flex-1 px-2 py-6">
      <ul class="space-y-2">
        <li>
          <NuxtLink
            to="/"
            :class="['w-full flex items-center px-4 py-3 text-neutral-700 hover:bg-primary-100 hover:text-primary-700 rounded-lg transition-colors duration-200', collapsed ? 'justify-center' : '']"
            active-class="bg-primary-100 text-primary-700"
          >
            <Icon name="fa6-solid:chart-line" :class="['w-5 h-5', collapsed ? 'mx-auto' : 'mr-3']" />
            <span v-if="!collapsed">Dashboard</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/contas"
            :class="['w-full flex items-center px-4 py-3 text-neutral-700 hover:bg-primary-100 hover:text-primary-700 rounded-lg transition-colors duration-200', collapsed ? 'justify-center' : '']"
            active-class="bg-primary-100 text-primary-700"
          >
            <Icon name="fa6-solid:users" :class="['w-5 h-5', collapsed ? 'mx-auto' : 'mr-3']" />
            <span v-if="!collapsed">Contas</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/leads"
            :class="['w-full flex items-center px-4 py-3 text-neutral-700 hover:bg-primary-100 hover:text-primary-700 rounded-lg transition-colors duration-200', collapsed ? 'justify-center' : '']"
            active-class="bg-primary-100 text-primary-700"
          >
            <Icon name="fa6-solid:user-plus" :class="['w-5 h-5', collapsed ? 'mx-auto' : 'mr-3']" />
            <span v-if="!collapsed">Leads</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/oportunidades"
            :class="['w-full flex items-center px-4 py-3 text-neutral-700 hover:bg-primary-100 hover:text-primary-700 rounded-lg transition-colors duration-200', collapsed ? 'justify-center' : '']"
            active-class="bg-primary-100 text-primary-700"
          >
            <Icon name="fa6-solid:briefcase" :class="['w-5 h-5', collapsed ? 'mx-auto' : 'mr-3']" />
            <span v-if="!collapsed">Oportunidades</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <!-- Rodapé -->
    <div class="p-4 border-t border-neutral-200 bg-neutral-50">
      <BaseDropdown
        :label="collapsed ? '' : 'Configurações'"
        icon="fa6-solid:gear"
        :items="dropdownItems"
        position="top"
        :buttonClass="collapsed ? 'justify-center px-2' : ''"
        :isCompact="collapsed"
      />
    </div>
  </aside>
</template>

<script setup lang="ts">
import type { DropdownItem } from '../../shared/types/dropdown'
import { ref } from 'vue'

// Estado de colapso
const collapsed = ref(false)
const toggleCollapsed = () => {
  collapsed.value = !collapsed.value
}

// Ações do menu
const handleProfile = () => {
  console.log('Perfil clicado')
}

const handleLogout = async () => {
  try {
    const { auth } = useSupabaseClient()
    await auth.signOut()
    await navigateTo('/login')
    console.log('Logout realizado com sucesso')
  } catch (error) {
    console.error('Erro ao fazer logout:', error)
  }
}

const handleTestClick = () => {
  console.log('Botão clicado!')
  alert('Botão de teste clicado!')
}

// Configuração dos itens do dropdown
const dropdownItems: DropdownItem[] = [
  {
    id: 'profile',
    label: 'Perfil',
    icon: 'fa6-solid:user',
    action: handleProfile
  },
  {
    id: 'logout',
    label: 'Sair',
    icon: 'fa6-solid:arrow-right-from-bracket',
    variant: 'danger',
    action: handleLogout
  }
]
</script>