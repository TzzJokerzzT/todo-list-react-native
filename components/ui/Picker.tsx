import { PickerProps } from "@/types/types.env";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  picker: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
  },
});

const Pick: React.FC<PickerProps> = ({ formData, onChange }) => {
  return (
    <Picker
      selectedValue={formData.type}
      style={styles.picker}
      onValueChange={(itemValue) => onChange("type", itemValue)}
    >
      <Picker.Item label="Select Type" value="" />
      <Picker.Item label="Work" value="Work" />
      <Picker.Item label="Personal" value="Personal" />
      <Picker.Item label="Other" value="Other" />
    </Picker>
  );
};

export default Pick;
