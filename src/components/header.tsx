import { Feather } from '@expo/vector-icons'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import colors from 'tailwindcss/colors'

import type { HeaderProps } from '@/types/header-props'

export function Header({ title, cartQuantityItems = 0 }: HeaderProps) {
  return (
    <View className="flex flex-row items-center border-b border-slate-700 pb-5 mx-5">
      <View className="flex-1">
        <Image
          source={require('@/assets/logo.png')}
          alt="Logo"
          className="h-6 w-32"
        />
        <Text className="text-white textl-xl font-heading mt-3">{title}</Text>
      </View>
      <TouchableOpacity className="relative">
        <View className="bg-lime-300 top-2 z-10 -right-3.5 w-4 h-4 rounded-full items-center justify-center">
          <Text className="text-slate-900 font-bold text-xs ">
            {cartQuantityItems}
          </Text>
        </View>
        <Feather name="shopping-bag" color={colors.white} size={24} />
      </TouchableOpacity>
    </View>
  )
}
