<template>
  <div class="h-screen bg-neutral-100 flex">
    <!-- Sidebar -->
    <div class="w-64 flex-shrink-0 h-screen overflow-hidden">
      <Sidebar />
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col h-screen overflow-hidden">
      <!-- Header -->
      <header class="bg-white shadow-sm border-b border-neutral-200 flex-shrink-0">
        <div class="px-6 py-4">
          <div class="flex items-center justify-between">
            <div>
              <h1 class="text-xl font-semibold text-neutral-800">Dashboard</h1>
              <p class="text-neutral-500 text-sm mt-1">Visão geral do sistema</p>
            </div>
            <div class="flex items-center space-x-3">
              <button class="bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200">
                Nova Ação
              </button>
              <div class="w-8 h-8 bg-neutral-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content Area -->
      <main class="flex-1 p-6 overflow-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
// Layout padrão com sidebar e header
</script>