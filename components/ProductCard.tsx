import { View, Text, Pressable } from "react-native";
import Toast from "react-native-toast-message";
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const handleAdd = () => {
    addToCart(product);
    Toast.show({
      type: "success",
      text1: "Added to cart",
      text2: product.name,
      position: "bottom",
      visibilityTime: 2200
    });
  }

  return (
    <View key={product.id} className="border rounded-lg p-3 mb-3">
      <Text className="py-1 text-lg font-semibold">{product.name}</Text>
      <Text className="py-1 text-gray-600">{product.description}</Text>
      <Text className="py-1 text-cyan-700 font-bold">
        {new Intl.NumberFormat("en-PH", {
          style: "currency",
          currency: "PHP",
          minimumFractionDigits: 2,
        }).format(product.price)}
      </Text>
      <Pressable
        onPress={handleAdd}
        className="mt-2 bg-cyan-700 rounded p-2"
      >
        <Text className="text-white text-center font-semibold">Add to Cart</Text>
      </Pressable>
    </View>
  )
}
