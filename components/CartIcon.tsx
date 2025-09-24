import { Link } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "@/context/CartContext";

export default function CartIcon() {
  const { cartCount } = useCart();

  return (
    <View className="flex-row justify-end mb-4">
      <Link href="/cart" asChild>
        <Pressable className="relative">
          {/* Cart Icon */}
          <Ionicons name="cart-outline" size={28} color="black" />

          {/* Badge */}
          <View className="absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5 items-center justify-center">
            <Text className="text-white text-xs font-bold">
              {cartCount}
            </Text>
          </View>
        </Pressable>
      </Link>
    </View>
  )
}
