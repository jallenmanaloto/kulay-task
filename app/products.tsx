import { SafeAreaView } from "react-native-safe-area-context";
import { View, FlatList, Text } from "react-native";
import { Product } from "@/lib/types";
import CartIcon from "@/components/CartIcon";
import ProductCard from "@/components/ProductCard";

const products: Product[] = [
  { id: 1, name: "System76 Laptop", description: "Linux based laptop with pre-installed PopOS!, perfect for developers.", price: 1200 },
  { id: 2, name: "Advocate", description: "The perfect way to remove tick and fleas from your furries.", price: 800 },
  { id: 3, name: "Razer Kraken", description: "Noise cancelling with portability in mind.", price: 200 },
  { id: 4, name: "Moonlander v2", description: "Split keyboard that is so ergonomic.", price: 330 },
];

export default function Products() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'left', 'right']}>
      <View className="flex-1 px-4">
        {/* Cart Header */}
        <View className="flex-row justify-between items-center py-4">
          <Text className="text-sm text-gray-700 tracking-wide">
            {products.length} items
          </Text>
          <CartIcon />
        </View>

        {/* Product list */}
        <FlatList
          data={products}
          keyExtractor={(product) => product.id.toString()}
          renderItem={({ item }) => <ProductCard product={item} />}
          contentContainerStyle={{
            paddingBottom: 100 // Extra space for bottom navigation
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  )
}
