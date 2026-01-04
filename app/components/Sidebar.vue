<template>
  <aside class="h-screen bg-white shadow-lg border-r border-neutral-200 flex flex-col">
    <!-- Cabeçalho -->
    <div class="p-6 border-b border-neutral-200">
      <h2 class="text-xl font-semibold text-neutral-800">ProspectorCRM</h2>
      <p class="text-sm text-neutral-500 mt-1">Painel de Controle</p>
    </div>

    <!-- Conteúdo Principal -->
    <nav class="flex-1 px-4 py-6">
      <ul class="space-y-2">
        <li>
          <NuxtLink 
            to="/" 
            class="flex items-center px-4 py-3 text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors duration-200"
            active-class="bg-primary-100 text-primary-700"
          >
            <Icon name="fa6-solid:chart-line" class="w-5 h-5 mr-3" />
            Dashboard
          </NuxtLink>
        </li>
        <li>
          <button 
            @click="handleTestClick"
            class="w-full flex items-center px-4 py-3 text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors duration-200"
          >
            <Icon name="fa6-solid:users" class="w-5 h-5 mr-3" />
            Contas
          </button>
        </li>
        <li>
          <button 
            @click="handleTestClick"
            class="w-full flex items-center px-4 py-3 text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors duration-200"
          >
            <Icon name="fa6-solid:user-plus" class="w-5 h-5 mr-3" />
            Leads
          </button>
        </li>
        <li>
          <button 
            @click="handleTestClick"
            class="w-full flex items-center px-4 py-3 text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors duration-200"
          >
            <Icon name="fa6-solid:briefcase" class="w-5 h-5 mr-3" />
            Oportunidades
          </button>
        </li>
      </ul>
    </nav>

    <!-- Rodapé -->
    <div class="p-6 border-t border-neutral-200 bg-neutral-50">
      <BaseDropdown
        label="Configurações"
        icon="fa6-solid:gear"
        :items="dropdownItems"
        position="top"
      />
    </div>
  </aside>
</template>

<script setup lang="ts">
import type { DropdownItem } from '../../shared/types/dropdown'

// Ações do menu
const handleProfile = () => {
  // TODO: Implementar ação do perfil
  console.log('Perfil clicado')
}

const handleLogout = async () => {
  try {
    // Implementar logout do Supabase
    const { auth } = useSupabaseClient()
    await auth.signOut()
    
    // Redirecionar para login
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