import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { FormProps } from "@/types/types.env";

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
  },
});

const Input: React.FC<FormProps> = ({ value, label, data, onChange }) => {
  return (
    <TextInput
      style={styles.input}
      label={label}
      value={value}
      onChangeText={(text) => onChange(data || "", text)}
    />
  );
};

export default Input;
