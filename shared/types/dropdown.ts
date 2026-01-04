// Tipos para componentes de dropdown
export interface DropdownItem {
  id: string
  label: string
  icon?: string
  variant?: 'default' | 'danger'
  action: () => void | Promise<void>
}

export interface DropdownProps {
  label: string
  icon?: string
  items: DropdownItem[]
  position?: 'top' | 'bottom'
  buttonClass?: string
}