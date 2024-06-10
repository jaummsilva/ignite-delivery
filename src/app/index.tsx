import { useState } from 'react'
import { FlatList, View } from 'react-native'

import { CategoryButton } from '@/components/category-button'
import { Header } from '@/components/header'
import { CATEGORIES } from '@/utils/data/products'

export default function Home() {
  const [category, setCategory] = useState('Bebidas')

  function handleCategorySelect(selectedCategory: string) {
    setCategory(selectedCategory)
  }

  return (
    <View>
      <Header title="Faça seu pedido" cartQuantityItems={3} />
      <FlatList
        horizontal
        className="max-h-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={item === category}
            onPress={() => handleCategorySelect(item)}
          />
        )}
        data={CATEGORIES}
      />
    </View>
  )
}
