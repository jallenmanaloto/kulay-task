import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-4">
      <Text className="text-2xl font-bold mb-6">
        Welcome to{" "}
        <Text className="text-2xl font-bold mb-6">
          <Text className="text-red-400">this.</Text>
          <Text className="text-cyan-700">Shop</Text>
        </Text>
      </Text>
      <Text className="text-center text-gray-700 mb-6">
        Browse our products and add them to your cart easily.
      </Text>

      <Link href="/products" asChild>
        <Pressable className="bg-cyan-500 px-6 py-3 rounded-full" >
          <Text className="text-white font-semibold text-lg">Go to Products</Text>
        </Pressable>
      </Link>
    </View>
  );
}
