<template>
  <div class="min-h-screen bg-gray-50 flex">
    <!-- Coluna esquerda - Formulário -->
    <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <LoginForm />
      </div>
    </div>

    <!-- Coluna direita - Conteúdo promocional -->
    <div class="hidden lg:flex lg:flex-1 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
      <div class="absolute inset-0 bg-black opacity-20"></div>
      
      <div class="flex flex-1 flex-col justify-center px-8 xl:px-12 relative z-10">
        <div class="text-center">
          <!-- Ícone de prospecção (lupa) -->
          <div class="mb-8 flex justify-center">
            <div class="w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
          </div>

          <div class="space-y-6">
            <h1 class="text-3xl font-bold text-white">
              Sistema
            </h1>
            <h1 class="text-3xl font-bold text-green-400 -mt-2">
              Prospector
            </h1>
            
            <p class="text-lg text-blue-100 leading-relaxed max-w-md mx-auto">
              Encontre e converta leads qualificados em clientes reais. Maximize suas oportunidades de vendas com inteligência.
            </p>

            <div class="grid grid-cols-1 gap-4 mt-8 text-left max-w-sm mx-auto">
              <div class="flex items-center text-white">
                <div class="w-2 h-2 bg-green-400 rounded-full mr-4 flex-shrink-0"></div>
                <span>Captação automática de leads</span>
              </div>
              <div class="flex items-center text-white">
                <div class="w-2 h-2 bg-green-400 rounded-full mr-4 flex-shrink-0"></div>
                <span>Qualificação inteligente de prospects</span>
              </div>
              <div class="flex items-center text-white">
                <div class="w-2 h-2 bg-green-400 rounded-full mr-4 flex-shrink-0"></div>
                <span>Análise de conversão e ROI</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue'

useHead({
  title: 'Login - ProspectorCRM',
  meta: [
    {
      name: 'description',
      content: 'Faça login no ProspectorCRM para gerenciar seus prospects de forma inteligente'
    }
  ]
})
</script>