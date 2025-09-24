import { useState } from "react";
import { View, Text, TextInput, Pressable, FlatList } from "react-native";
import { useCart } from "@/context/CartContext";
import CheckoutItem from "@/components/CheckoutItem";

export default function Cart() {
  const { cart, cartCount, total, } = useCart();

  // Early return if there are no item/s in the cart
  if (cart.length === 0) {
    return (
      <View className="p-12">
        <Text className="text-center text-lg font-bold">Cart is empty</Text>
      </View>
    )
  }

  const [voucher, setVoucher] = useState("");
  const [discount, setDiscount] = useState(0);

  const applyVoucher = () => {
    if (cart.length < 1) return;

    // Hardcoding for now the discount voucher
    if (voucher.toLowerCase() === "discount10") {
      setVoucher("");
      setDiscount(0.1);
    }
  }

  const formatPrice = (price: number) => price.toLocaleString("en-PH", { minimumFractionDigits: 2 });
  const finalTotal = total - (total * discount);

  return (
    <View style={{ padding: 12 }}>
      {/* Header */}
      <Text className="text-center text-lg font-bold mb-5">
        Total items ({cartCount})
      </Text>

      {/* Cart items */}
      <FlatList
        data={cart}
        keyExtractor={(cartItem) => cartItem.id.toString()}
        renderItem={({ item }) => <CheckoutItem item={item} />}
      />

      {/* Totals */}
      {cart.length > 0 && (
        <View className="flex-row justify-between items-center mt-4">
          <Text className="font-semibold">Total price</Text>
          <View className="flex-row items-center">
            {discount > 0 ? (
              <>
                <Text className="text-cyan-600 text-xs font-bold mr-2">discount10</Text>
                <Text className="text-red-500 line-through mr-2">
                  ₱{formatPrice(total)}
                </Text>
                <Text className="font-bold text-lg">
                  ₱{formatPrice(finalTotal)}
                </Text>
              </>
            ) : (
              <Text className="font-bold text-lg">
                ₱{formatPrice(total)}
              </Text>
            )}
          </View>
        </View>
      )}

      {/* Voucher */}
      <TextInput
        placeholder="Enter voucher code"
        value={voucher}
        onChangeText={setVoucher}
        className="p-2 mt-10 border rounded outline-none"
      />
      <Pressable
        onPress={applyVoucher}
        className="mt-2 bg-cyan-700 rounded p-2"
      >
        <Text className="text-white text-center font-semibold">Apply voucher</Text>
      </Pressable>
    </View>
  )
}
