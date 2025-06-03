import Calculator from "@/Components/Calculadora";
import { Stack } from "expo-router";

export default function Index() {
  return (
    <>
    <Stack.Screen options={{ title: "Calculadora", headerTitleAlign: "center" }} />
      <Calculator />
    </>
  );
}