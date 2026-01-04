# BaseDropdown Component

Um componente dropdown reutilizável seguindo as melhores práticas do Nuxt 4.

## Características

- 🎨 **Completamente tipado** com TypeScript
- 🔄 **Reativo** com Vue 3 Composition API  
- 🎯 **Acessível** com foco no teclado e ARIA
- ✨ **Animado** com transições suaves
- 🎭 **Flexível** com suporte a diferentes variantes
- 📱 **Responsivo** com posicionamento inteligente

## Uso Básico

```vue
<template>
  <BaseDropdown
    label="Menu"
    icon="fa6-solid:gear"
    :items="menuItems"
    position="top"
  />
</template>

<script setup lang="ts">
import type { DropdownItem } from '~/shared/types/dropdown'

const menuItems: DropdownItem[] = [
  {
    id: 'profile',
    label: 'Perfil',
    icon: 'fa6-solid:user',
    action: () => console.log('Perfil')
  },
  {
    id: 'settings',
    label: 'Configurações',
    icon: 'fa6-solid:gear',
    action: () => console.log('Configurações')
  },
  {
    id: 'logout',
    label: 'Sair',
    icon: 'fa6-solid:sign-out-alt',
    variant: 'danger',
    action: async () => {
      // Lógica de logout
      await signOut()
    }
  }
]
</script>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `label` | `string` | - | Texto do botão principal |
| `icon` | `string` | - | Nome do ícone (opcional) |
| `items` | `DropdownItem[]` | - | Array de itens do menu |
| `position` | `'top' \| 'bottom'` | `'bottom'` | Posição do dropdown |
| `buttonClass` | `string` | `''` | Classes CSS adicionais para o botão |

## Tipos

### DropdownItem

```typescript
interface DropdownItem {
  id: string
  label: string
  icon?: string
  variant?: 'default' | 'danger'
  action: () => void | Promise<void>
}
```

## Variantes de Item

- **default**: Estilo padrão com texto neutro
- **danger**: Estilo para ações destrutivas (vermelho)

## Posicionamento

- **bottom**: Dropdown abre para baixo (padrão)
- **top**: Dropdown abre para cima (útil em rodapés)

## Acessibilidade

- Suporte completo ao teclado (Enter, Escape)
- Foco automaticamente gerenciado
- Backdrop clicável para fechar
- Transições suaves para melhor UX

## Estrutura de Arquivos

```
app/
├── components/
│   ├── BaseDropdown.vue      # Componente principal
│   └── DropdownItem.vue      # Item individual
shared/
└── types/
    └── dropdown.ts           # Tipos TypeScript
```

## Exemplo Avançado

```vue
<template>
  <div class="space-y-4">
    <!-- Dropdown em diferentes posições -->
    <BaseDropdown
      label="Menu Superior"
      :items="items"
      position="bottom"
      button-class="bg-blue-500 text-white"
    />
    
    <BaseDropdown
      label="Menu Inferior"
      :items="items"
      position="top"
      button-class="bg-green-500 text-white"
    />
  </div>
</template>
```