export const useAuth = () => {
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()

  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const login = async (email: string, password: string) => {
    try {
      isLoading.value = true
      error.value = null

      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (authError) {
        error.value = authError.message
        throw authError
      }

      // Redirecionar para a página inicial após login bem-sucedido
      await navigateTo('/')
      
      return { data, error: null }
    } catch (err: any) {
      error.value = err.message || 'Erro ao fazer login'
      return { data: null, error: err }
    } finally {
      isLoading.value = false
    }
  }

  const logout = async () => {
    try {
      isLoading.value = true
      error.value = null

      const { error: authError } = await supabase.auth.signOut()

      if (authError) {
        error.value = authError.message
        throw authError
      }

      // Redirecionar para a página de login após logout
      await navigateTo('/login')
      
      return { error: null }
    } catch (err: any) {
      error.value = err.message || 'Erro ao fazer logout'
      return { error: err }
    } finally {
      isLoading.value = false
    }
  }

  const signUp = async (email: string, password: string) => {
    try {
      isLoading.value = true
      error.value = null

      const { data, error: authError } = await supabase.auth.signUp({
        email,
        password
      })

      if (authError) {
        error.value = authError.message
        throw authError
      }

      return { data, error: null }
    } catch (err: any) {
      error.value = err.message || 'Erro ao criar conta'
      return { data: null, error: err }
    } finally {
      isLoading.value = false
    }
  }

  const resetPassword = async (email: string) => {
    try {
      isLoading.value = true
      error.value = null

      const { data, error: authError } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      })

      if (authError) {
        error.value = authError.message
        throw authError
      }

      return { data, error: null }
    } catch (err: any) {
      error.value = err.message || 'Erro ao enviar email de recuperação'
      return { data: null, error: err }
    } finally {
      isLoading.value = false
    }
  }

  return {
    // Estado
    user: readonly(user),
    isLoading: readonly(isLoading),
    error: readonly(error),
    
    // Computed
    isLoggedIn: computed(() => !!user.value),
    
    // Métodos
    login,
    logout,
    signUp,
    resetPassword,
    
    // Utility
    clearError: () => { error.value = null }
  }
}