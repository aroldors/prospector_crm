import { defineStore } from 'pinia'
import type { UserProfile } from '../../types/database'

interface UserState {
  profile: UserProfile | null
  loading: boolean
  error: string | null
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    profile: null,
    loading: false,
    error: null
  }),

  getters: {
    userName: (state) => state.profile?.nome || '',
    userCpf: (state) => state.profile?.cpf || '',
    userPhone: (state) => state.profile?.telefone || '',
    userRole: (state) => state.profile?.role || '',
    userAddress: (state) => {
      if (!state.profile) return ''
      const { endereco, numero, bairro, cidade, uf } = state.profile
      return `${endereco || ''} ${numero || ''}, ${bairro || ''} - ${cidade || ''}, ${uf || ''}`.trim()
    },
    isActive: (state) => state.profile?.ativo === true,
    hasProfile: (state) => state.profile !== null,
    isLoading: (state) => state.loading,
    hasError: (state) => state.error !== null
  },

  actions: {
    async fetchUserProfile() {
      this.loading = true
      this.error = null
      
      try {
        const supabase = useSupabaseClient()
        const user = useSupabaseUser()
        
        if (!user.value) {
          throw new Error('Usuário não autenticado')
        }

        const { data, error } = await supabase
          .from('users')
          .select('*')
          .eq('user_id', user.value.id)
          .single()

        if (error) {
          throw new Error(error.message)
        }

        this.profile = data as UserProfile
      } catch (err: any) {
        this.error = err.message || 'Erro ao buscar perfil do usuário'
        console.error('Erro ao buscar perfil:', err)
      } finally {
        this.loading = false
      }
    },

    clearProfile() {
      this.profile = null
      this.error = null
      this.loading = false
    }
  }
})