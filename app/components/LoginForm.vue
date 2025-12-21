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

      <form class="space-y-6">
        <div>
          <BaseInput
            id="login-email"
            v-model="email"
            type="email"
            label="E-mail"
            placeholder="seu@email.com"
            leading-icon="email"
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
            required
          />
        </div>

        <div>
          <BaseButton
            type="submit"
            variant="primary"
            class="w-full"
          >
            Entrar
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
</script>