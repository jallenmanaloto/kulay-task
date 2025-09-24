import { View, Text, Pressable } from "react-native";
import Toast from "react-native-toast-message";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons"
import { CartItem } from "@/lib/types";
import { useCart } from "@/context/CartContext";

export default function CheckoutItem({ item }: { item: CartItem }) {
  const {
    decreaseQuantity,
    increaseQuantity,
    removeFromCart
  } = useCart();

  const handleRemove = () => {
    removeFromCart(item.id);
    Toast.show({
      type: "success",
      text1: "Removed from cart",
      text2: item.name,
      position: "bottom",
      visibilityTime: 2200
    });
  }

  return (
    <View
      key={item.id}
      className="flex-row items-center py-2 border-b border-gray-300"
    >
      {/* Item name */}
      <Text className="flex-1">{item.name}</Text>

      {/* Quantity controls */}
      <View className="flex-row items-center w-28 justify-center">
        <Pressable onPress={() => decreaseQuantity(item.id)} className="px-2">
          <AntDesign name="minus" size={16} color="#0e7490" />
        </Pressable>

        {/* Item quantity */}
        <View className="px-3 py-1 border border-gray-300 rounded-md bg-gray-100">
          <Text className="text-base font-semibold text-gray-800">
            {item.quantity}
          </Text>
        </View>

        <Pressable onPress={() => increaseQuantity(item.id)} className="px-2">
          <AntDesign name="plus" size={16} color="#0e7490" />
        </Pressable>
      </View>

      {/* Price */}
      <Text className="w-24 text-right font-medium">
        ₱{(item.price * item.quantity).toLocaleString("en-PH", {
          minimumFractionDigits: 2,
        })}
      </Text>

      {/* Trash icon */}
      <Pressable onPress={handleRemove} className="ml-2">
        <FontAwesome6 name="trash" size={20} color="#f87171" />
      </Pressable>
    </View>
  )
}
