<template>
  <div class="min-h-screen bg-neutral-100">
    <!-- Header -->
    <header class="bg-white shadow-header border-b border-neutral-200">
      <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-semibold text-neutral-800">Teste de Componentes</h1>
            <p class="text-neutral-500 text-sm mt-1">BaseButton, BaseInput e Toast</p>
          </div>
          <NuxtLink to="/" class="text-primary-600 hover:text-primary-700 text-sm font-medium">
            ← Voltar ao início
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <main class="max-w-7xl mx-auto px-6 py-8">
      <!-- Toast Demo -->
      <section class="bg-card-bg rounded-card shadow-card p-6 mb-8">
        <h2 class="text-xl font-semibold text-neutral-800 mb-4 flex items-center gap-2">
          <Icon name="heroicons:bell" class="w-5 h-5 text-accent-500" />
          Sistema de Notificações (Toast)
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <BaseButton 
            variant="primary" 
            @click="() => toast.success('Operação realizada com sucesso!')"
          >
            <template #icon>
              <Icon name="heroicons:check-circle" class="w-5 h-5" />
            </template>
            Sucesso
          </BaseButton>

          <BaseButton 
            variant="danger" 
            @click="() => toast.error('Erro encontrado! Verifique os dados.')"
          >
            <template #icon>
              <Icon name="heroicons:x-circle" class="w-5 h-5" />
            </template>
            Erro
          </BaseButton>

          <BaseButton 
            variant="secondary" 
            @click="() => toast.warning('Atenção necessária para continuar.')"
          >
            <template #icon>
              <Icon name="heroicons:exclamation-triangle" class="w-5 h-5" />
            </template>
            Aviso
          </BaseButton>

          <BaseButton 
            variant="ghost" 
            @click="() => toast.info('Informação importante para o usuário.')"
          >
            <template #icon>
              <Icon name="heroicons:information-circle" class="w-5 h-5" />
            </template>
            Info
          </BaseButton>
        </div>
      </section>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- BaseButton Tests -->
        <div class="bg-card-bg rounded-card shadow-card p-6">
          <h2 class="text-xl font-semibold text-neutral-800 mb-6">BaseButton</h2>
          
          <div class="space-y-8">
            <!-- Variantes -->
            <div>
              <h3 class="text-sm font-medium text-neutral-600 mb-4">Variantes</h3>
              <div class="flex flex-wrap gap-3">
                <BaseButton variant="primary" @click="showMessage('Primary clicked!')">
                  Primário
                </BaseButton>
                <BaseButton variant="secondary" @click="showMessage('Secondary clicked!')">
                  Secundário
                </BaseButton>
                <BaseButton variant="outline" @click="showMessage('Outline clicked!')">
                  Outline
                </BaseButton>
                <BaseButton variant="ghost" @click="showMessage('Ghost clicked!')">
                  Ghost
                </BaseButton>
                <BaseButton variant="danger" @click="showMessage('Danger clicked!')">
                  Perigo
                </BaseButton>
              </div>
            </div>

            <!-- Tamanhos -->
            <div>
              <h3 class="text-sm font-medium text-neutral-600 mb-4">Tamanhos</h3>
              <div class="flex flex-wrap items-center gap-3">
                <BaseButton size="sm" @click="showMessage('Small clicked!')">
                  Pequeno
                </BaseButton>
                <BaseButton size="md" @click="showMessage('Medium clicked!')">
                  Médio
                </BaseButton>
                <BaseButton size="lg" @click="showMessage('Large clicked!')">
                  Grande
                </BaseButton>
              </div>
            </div>

            <!-- Estados -->
            <div>
              <h3 class="text-sm font-medium text-neutral-600 mb-4">Estados</h3>
              <div class="flex flex-wrap gap-3">
                <BaseButton :loading="isLoading" @click="simulateLoading">
                  {{ isLoading ? 'Carregando...' : 'Simular Loading' }}
                </BaseButton>
                <BaseButton disabled>
                  Desabilitado
                </BaseButton>
                <BaseButton full-width>
                  Largura Total
                </BaseButton>
              </div>
            </div>

            <!-- Com ícones -->
            <div>
              <h3 class="text-sm font-medium text-neutral-600 mb-4">Com Ícones</h3>
              <div class="flex flex-wrap gap-3">
                <BaseButton @click="showMessage('Save clicked!')">
                  <template #icon>
                    <Icon name="heroicons:check" class="w-4 h-4" />
                  </template>
                  Salvar
                </BaseButton>
                <BaseButton variant="outline">
                  <template #icon>
                    <Icon name="heroicons:plus" class="w-4 h-4" />
                  </template>
                  Adicionar
                </BaseButton>
              </div>
            </div>
          </div>
        </div>

        <!-- BaseInput Tests -->
        <div class="bg-card-bg rounded-card shadow-card p-6">
          <h2 class="text-xl font-semibold text-neutral-800 mb-6">BaseInput</h2>
          
          <div class="space-y-6">
            <!-- Input básico -->
            <BaseInput
              v-model="formData.name"
              label="Nome completo"
              placeholder="Digite seu nome"
              hint="Este campo é obrigatório"
              required
            />

            <!-- Input com erro -->
            <BaseInput
              v-model="formData.email"
              type="email"
              label="E-mail"
              placeholder="usuario@exemplo.com"
              :error="emailError"
              required
            />

            <!-- Input com ícones -->
            <BaseInput
              v-model="formData.search"
              label="Buscar"
              placeholder="Pesquisar..."
              leading-icon="heroicons:magnifying-glass"
            />

            <!-- Input senha -->
            <BaseInput
              v-model="formData.password"
              :type="showPassword ? 'text' : 'password'"
              label="Senha"
              placeholder="Digite sua senha"
              required
              leading-icon="heroicons:lock-closed"
              trailing-icon="heroicons:eye"
              @trailing-click="showPassword = !showPassword"
            />

            <!-- Tamanhos diferentes -->
            <div>
              <h3 class="text-sm font-medium text-neutral-600 mb-3">Tamanhos</h3>
              <div class="space-y-3">
                <BaseInput
                  v-model="formData.small"
                  size="sm"
                  label="Pequeno"
                  placeholder="Input pequeno"
                />
                <BaseInput
                  v-model="formData.medium"
                  size="md"
                  label="Médio"
                  placeholder="Input médio"
                />
                <BaseInput
                  v-model="formData.large"
                  size="lg"
                  label="Grande"
                  placeholder="Input grande"
                />
              </div>
            </div>

            <!-- Input desabilitado e readonly -->
            <div class="grid grid-cols-2 gap-4">
              <BaseInput
                model-value="Campo desabilitado"
                label="Desabilitado"
                disabled
              />
              <BaseInput
                model-value="Campo somente leitura"
                label="Somente leitura"
                readonly
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Formulário de teste -->
      <div class="mt-8 bg-card-bg rounded-card shadow-card p-6">
        <h2 class="text-xl font-semibold text-neutral-800 mb-6">Formulário de Teste</h2>
        
        <form @submit.prevent="submitForm" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BaseInput
              v-model="formData.firstName"
              label="Nome"
              placeholder="Seu nome"
              required
              leading-icon="heroicons:user"
            />
            <BaseInput
              v-model="formData.lastName"
              label="Sobrenome"
              placeholder="Seu sobrenome"
              required
              leading-icon="heroicons:user"
            />
          </div>

          <BaseInput
            v-model="formData.company"
            label="Empresa"
            placeholder="Nome da empresa"
            leading-icon="heroicons:building-office"
          />

          <BaseInput
            v-model="formData.phone"
            type="tel"
            label="Telefone"
            placeholder="(11) 99999-9999"
            leading-icon="heroicons:phone"
          />

          <div class="flex gap-4 pt-4">
            <BaseButton type="submit" :loading="isSubmitting">
              <template #icon>
                <Icon name="heroicons:paper-airplane" class="w-5 h-5" />
              </template>
              Enviar Formulário
            </BaseButton>
            <BaseButton type="button" variant="outline" @click="resetForm">
              <template #icon>
                <Icon name="heroicons:trash" class="w-5 h-5" />
              </template>
              Limpar
            </BaseButton>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification'

// Metadados da página
useSeoMeta({
  title: 'ProspectorCRM - Teste de Componentes',
  description: 'Página para testar os componentes BaseButton e BaseInput com vue-toastification'
})

// Composables
const toast = useToast()

// Estado reativo
const isLoading = ref(false)
const isSubmitting = ref(false)
const showPassword = ref(false)
const message = ref('')

const formData = ref({
  name: '',
  email: '',
  search: '',
  password: '',
  small: '',
  medium: '',
  large: '',
  firstName: '',
  lastName: '',
  company: '',
  phone: ''
})

// Computed
const emailError = computed(() => {
  if (!formData.value.email) return ''
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.value.email)) {
    return 'Por favor, insira um e-mail válido'
  }
  
  return ''
})

// Métodos
const showMessage = (text: string) => {
  toast.info(text)
}

const simulateLoading = async () => {
  isLoading.value = true
  const loadingToastId = toast.info('Processando...', { timeout: false })
  
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  isLoading.value = false
  toast.dismiss(loadingToastId)
  toast.success('Loading finalizado!')
}

const submitForm = async () => {
  if (emailError.value) {
    toast.error('Formulário inválido. Corrija os erros antes de enviar.')
    return
  }

  isSubmitting.value = true
  
  // Simula envio do formulário
  const loadingToastId = toast.info('Enviando formulário...', { timeout: false })
  
  try {
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    toast.dismiss(loadingToastId)
    toast.success('Formulário enviado com sucesso!')
    
    // Limpar formulário
    Object.keys(formData.value).forEach(key => {
      formData.value[key as keyof typeof formData.value] = ''
    })
    
  } catch (error) {
    toast.dismiss(loadingToastId)
    toast.error('Erro ao enviar. Tente novamente.')
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = () => {
  Object.keys(formData.value).forEach(key => {
    formData.value[key as keyof typeof formData.value] = ''
  })
  toast.info('Formulário limpo!')
}
</script>