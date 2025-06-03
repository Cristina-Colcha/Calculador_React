import { Colors } from "@/utils/Colors";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { GestureResponderEvent } from "react-native";

const Button = ({
  title,
  type,
  onPress
}: {
  title: string;
  type: "top" | "right" | "number";
  onPress: (event: GestureResponderEvent) => void;
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor:
            type == "top"
              ? Colors.btnSpecial
              : type == "right"
              ? Colors.btnRight
              : Colors.btnLight,
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={{
          fontSize: 34,
          color: type == "number" ? Colors.black : Colors.white,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: 70,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.btnSpecial,
  },
});