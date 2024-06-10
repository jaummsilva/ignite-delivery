import { clsx } from 'clsx'
import { Pressable, Text } from 'react-native'

import type { CategoryButtonProps } from '@/types/category-button-props'

export function CategoryButton({
  title,
  isSelected,
  ...rest
}: CategoryButtonProps) {
  return (
    <Pressable
      className={clsx('bg-slate-800 px-4 justify-center rounded-md h-10', {
        'border-2 border-lime-300': isSelected,
      })}
      {...rest}
    >
      <Text className="text-slate-100 font-subtitle text-sm h-10 text-center">
        {title}
      </Text>
    </Pressable>
  )
}
