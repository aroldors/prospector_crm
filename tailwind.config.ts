import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,vue}',
    './components/**/*.{js,ts,vue}',
    './layouts/**/*.{js,ts,vue}',
    './pages/**/*.{js,ts,vue}',
    './plugins/**/*.{js,ts,vue}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta primária - Azuis profissionais
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',   // Azul principal
          600: '#0284c7',   // Azul hover
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        
        // Paleta secundária - Cinzas neutros
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',   // Background claro
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',   // Texto secundário
          600: '#525252',   // Texto primário
          700: '#404040',
          800: '#262626',   // Texto escuro
          900: '#171717',
          950: '#0a0a0a',
        },

        // Paleta de destaque - Laranja sutil
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',   // Laranja principal
          600: '#ea580c',   // Laranja hover
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },

        // Estados semânticos
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        info: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
        },

        // Cores específicas para CRM
        sidebar: {
          bg: '#fafafa',      // Fundo sidebar
          border: '#e5e5e5',  // Borda sidebar
        },
        card: {
          bg: '#ffffff',      // Fundo cards
          border: '#f5f5f5',  // Borda cards
        }
      },

      // Tipografia otimizada para dashboards
      fontFamily: {
        sans: [
          'Inter', 
          'system-ui', 
          '-apple-system', 
          'BlinkMacSystemFont', 
          'Segoe UI', 
          'Roboto', 
          'sans-serif'
        ],
        mono: [
          'JetBrains Mono', 
          'Fira Code', 
          'Monaco', 
          'Consolas', 
          'monospace'
        ]
      },

      // Espaçamentos consistentes
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
      },

      // Bordas arredondadas sutis
      borderRadius: {
        'sm': '0.25rem',
        'DEFAULT': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'card': '0.5rem',
        'button': '0.375rem',
      },

      // Sombras profissionais
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'sidebar': '2px 0 6px -1px rgba(0, 0, 0, 0.1)',
        'header': '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        'dropdown': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },

      // Tamanhos para componentes
      height: {
        'header': '4rem',
        'sidebar': 'calc(100vh - 4rem)',
        'content': 'calc(100vh - 4rem)',
      },

      // Larguras para layout
      width: {
        'sidebar': '16rem',
        'sidebar-collapsed': '4rem',
      },

      // Transições suaves
      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
      },

      // Grid personalizado para dashboards
      gridTemplateColumns: {
        'sidebar': '16rem 1fr',
        'sidebar-collapsed': '4rem 1fr',
        'dashboard': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
    },
  },
  plugins: [],
}

export default config