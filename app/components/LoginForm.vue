<template>
  <div class="w-full max-w-md mx-auto">
    <div class="bg-white rounded-lg shadow-lg p-8">
      <div class="mb-8 text-center">
        <h2 class="text-2xl font-bold text-gray-900">
          Bem-vindo de volta
        </h2>
        <p class="mt-2 text-sm text-gray-600">
          Entre com suas credenciais para acessar sua conta
        </p>
      </div>

      <form class="space-y-6" @submit.prevent="handleLogin">
        <div>
          <BaseInput
            id="login-email"
            v-model="email"
            type="email"
            label="E-mail"
            placeholder="seu@email.com"
            leading-icon="email"
            :error-message="emailError"
            required
          />
        </div>

        <div>
          <BaseInput
            id="login-password"
            v-model="password"
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            leading-icon="lock"
            :error-message="passwordError"
            required
          />
        </div>

        <!-- Exibir erro geral de autenticação -->
        <div v-if="authError" class="bg-red-50 border border-red-200 rounded-md p-3">
          <div class="flex">
            <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
            <div class="ml-3">
              <p class="text-sm text-red-600">{{ authError }}</p>
            </div>
          </div>
        </div>

        <div>
          <BaseButton
            type="submit"
            variant="primary"
            class="w-full"
            :disabled="isLoading"
          >
            <span v-if="isLoading">Entrando...</span>
            <span v-else>Entrar</span>
          </BaseButton>
        </div>

        <div class="text-center">
          <a href="#" class="text-sm font-medium text-blue-600 hover:text-blue-500">
            Esqueceu a senha?
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'

const email = ref('')
const password = ref('')
const emailError = ref('')
const passwordError = ref('')

// Usar o composable de autenticação
const { login, isLoading, error: authError, clearError } = useAuth()

// Validação simples
const validateForm = () => {
  let isValid = true
  
  // Limpar erros anteriores
  emailError.value = ''
  passwordError.value = ''
  clearError()

  // Validar email
  if (!email.value.trim()) {
    emailError.value = 'E-mail é obrigatório'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    emailError.value = 'E-mail deve ter um formato válido'
    isValid = false
  }

  // Validar senha
  if (!password.value.trim()) {
    passwordError.value = 'Senha é obrigatória'
    isValid = false
  } else if (password.value.length < 6) {
    passwordError.value = 'Senha deve ter pelo menos 6 caracteres'
    isValid = false
  }

  return isValid
}

// Função para lidar com o submit do formulário
const handleLogin = async () => {
  if (!validateForm()) {
    return
  }

  try {
    await login(email.value, password.value)
    // Se chegou aqui, o login foi bem-sucedido
    // O redirecionamento é feito automaticamente no composable
  } catch (error) {
    // Erro já é tratado no composable
    console.error('Erro no login:', error)
  }
}
</script>