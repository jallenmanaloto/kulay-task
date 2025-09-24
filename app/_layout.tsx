import "../global.css";
import { Stack } from "expo-router";
import Toast from "react-native-toast-message";
import { CartProvider } from "@/context/CartContext";

export default function RootLayout() {
  return (
    <CartProvider>
      <Stack>
        <Stack.Screen name="products" options={{ title: "Products" }} />
        <Stack.Screen name="index" options={{ title: "" }} />
        <Stack.Screen name="cart" options={{ title: "Cart" }} />
      </Stack>
      <Toast />
    </CartProvider>
  );
}
