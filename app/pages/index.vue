<template>
  <div class="min-h-screen bg-neutral-100">
    <!-- Header -->
    <header class="bg-white shadow-header border-b border-neutral-200">
      <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-semibold text-neutral-800">ProspectorCRM</h1>
            <p class="text-neutral-500 text-sm mt-1">System Design Demo</p>
          </div>
          <div class="flex items-center space-x-3">
            <button class="bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium px-4 py-2 rounded-button transition-colors duration-250">
              Novo Lead
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <main class="max-w-7xl mx-auto px-6 py-8">
      <!-- Métricas -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-card-bg rounded-card shadow-card p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-neutral-500 text-sm font-medium">Total de Leads</p>
              <p class="text-neutral-800 text-2xl font-semibold mt-1">1,247</p>
            </div>
            <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
          <div class="mt-4 flex items-center text-sm">
            <span class="text-success-600 font-medium">+12%</span>
            <span class="text-neutral-500 ml-2">vs último mês</span>
          </div>
        </div>

        <div class="bg-card-bg rounded-card shadow-card p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-neutral-500 text-sm font-medium">Conversões</p>
              <p class="text-neutral-800 text-2xl font-semibold mt-1">156</p>
            </div>
            <div class="w-10 h-10 bg-success-100 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div class="mt-4 flex items-center text-sm">
            <span class="text-success-600 font-medium">+8%</span>
            <span class="text-neutral-500 ml-2">vs último mês</span>
          </div>
        </div>

        <div class="bg-card-bg rounded-card shadow-card p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-neutral-500 text-sm font-medium">Receita</p>
              <p class="text-neutral-800 text-2xl font-semibold mt-1">R$ 89.2k</p>
            </div>
            <div class="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
          </div>
          <div class="mt-4 flex items-center text-sm">
            <span class="text-success-600 font-medium">+15%</span>
            <span class="text-neutral-500 ml-2">vs último mês</span>
          </div>
        </div>

        <div class="bg-card-bg rounded-card shadow-card p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-neutral-500 text-sm font-medium">Taxa Conversão</p>
              <p class="text-neutral-800 text-2xl font-semibold mt-1">12.5%</p>
            </div>
            <div class="w-10 h-10 bg-info-100 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-info-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div class="mt-4 flex items-center text-sm">
            <span class="text-error-600 font-medium">-2%</span>
            <span class="text-neutral-500 ml-2">vs último mês</span>
          </div>
        </div>
      </div>

      <!-- System Design Demo -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Paleta de Cores -->
        <div class="bg-card-bg rounded-card shadow-card p-6">
          <h3 class="text-lg font-semibold text-neutral-800 mb-6">Paleta de Cores</h3>
          
          <div class="space-y-6">
            <!-- Cores Primárias -->
            <div>
              <h4 class="text-sm font-medium text-neutral-600 mb-3">Primary (Azul Profissional)</h4>
              <div class="flex space-x-2">
                <div class="flex-1 h-12 bg-primary-100 rounded-md flex items-center justify-center text-xs font-medium text-primary-800">100</div>
                <div class="flex-1 h-12 bg-primary-300 rounded-md flex items-center justify-center text-xs font-medium text-primary-800">300</div>
                <div class="flex-1 h-12 bg-primary-500 rounded-md flex items-center justify-center text-xs font-medium text-white">500</div>
                <div class="flex-1 h-12 bg-primary-600 rounded-md flex items-center justify-center text-xs font-medium text-white">600</div>
                <div class="flex-1 h-12 bg-primary-700 rounded-md flex items-center justify-center text-xs font-medium text-white">700</div>
              </div>
            </div>

            <!-- Cores Neutras -->
            <div>
              <h4 class="text-sm font-medium text-neutral-600 mb-3">Neutral (Cinza Elegante)</h4>
              <div class="flex space-x-2">
                <div class="flex-1 h-12 bg-neutral-100 rounded-md flex items-center justify-center text-xs font-medium text-neutral-800">100</div>
                <div class="flex-1 h-12 bg-neutral-300 rounded-md flex items-center justify-center text-xs font-medium text-neutral-800">300</div>
                <div class="flex-1 h-12 bg-neutral-500 rounded-md flex items-center justify-center text-xs font-medium text-white">500</div>
                <div class="flex-1 h-12 bg-neutral-600 rounded-md flex items-center justify-center text-xs font-medium text-white">600</div>
                <div class="flex-1 h-12 bg-neutral-800 rounded-md flex items-center justify-center text-xs font-medium text-white">800</div>
              </div>
            </div>

            <!-- Cores de Destaque -->
            <div>
              <h4 class="text-sm font-medium text-neutral-600 mb-3">Accent (Laranja Sutil)</h4>
              <div class="flex space-x-2">
                <div class="flex-1 h-12 bg-accent-100 rounded-md flex items-center justify-center text-xs font-medium text-accent-800">100</div>
                <div class="flex-1 h-12 bg-accent-300 rounded-md flex items-center justify-center text-xs font-medium text-accent-800">300</div>
                <div class="flex-1 h-12 bg-accent-500 rounded-md flex items-center justify-center text-xs font-medium text-white">500</div>
                <div class="flex-1 h-12 bg-accent-600 rounded-md flex items-center justify-center text-xs font-medium text-white">600</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Componentes -->
        <div class="bg-card-bg rounded-card shadow-card p-6">
          <h3 class="text-lg font-semibold text-neutral-800 mb-6">Componentes</h3>
          
          <div class="space-y-6">
            <!-- Botões -->
            <div>
              <h4 class="text-sm font-medium text-neutral-600 mb-3">Botões</h4>
              <div class="flex flex-wrap gap-3">
                <button class="bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium px-4 py-2 rounded-button transition-colors duration-250">
                  Primário
                </button>
                <button class="bg-neutral-200 hover:bg-neutral-300 text-neutral-700 text-sm font-medium px-4 py-2 rounded-button transition-colors duration-250">
                  Secundário
                </button>
                <button class="border border-accent-500 text-accent-600 hover:bg-accent-500 hover:text-white text-sm font-medium px-4 py-2 rounded-button transition-all duration-250">
                  Outline
                </button>
              </div>
            </div>

            <!-- Estados -->
            <div>
              <h4 class="text-sm font-medium text-neutral-600 mb-3">Estados</h4>
              <div class="space-y-3">
                <div class="bg-success-50 border border-success-200 text-success-800 px-4 py-3 rounded-md">
                  <p class="text-sm font-medium">✓ Operação realizada com sucesso</p>
                </div>
                
                <div class="bg-warning-50 border border-warning-200 text-warning-800 px-4 py-3 rounded-md">
                  <p class="text-sm font-medium">⚠ Atenção necessária</p>
                </div>
                
                <div class="bg-error-50 border border-error-200 text-error-800 px-4 py-3 rounded-md">
                  <p class="text-sm font-medium">✕ Erro encontrado</p>
                </div>

                <div class="bg-info-50 border border-info-200 text-info-800 px-4 py-3 rounded-md">
                  <p class="text-sm font-medium">ℹ Informação importante</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-neutral-800 text-white mt-16">
      <div class="max-w-7xl mx-auto px-6 py-8">
        <div class="text-center">
          <p class="text-neutral-400">ProspectorCRM - System Design</p>
          <p class="text-neutral-500 text-sm mt-2">Design profissional e sóbrio para aplicações corporativas</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Metadados da página
useSeoMeta({
  title: 'ProspectorCRM - System Design',
  description: 'Design system profissional para CRM com paleta sóbria e componentes corporativos'
})
</script>