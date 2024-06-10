import type { PressableProps } from 'react-native'

export type CategoryButtonProps = PressableProps & {
  title: string
  isSelected?: boolean
}
