import { CheckboxProps } from "@/types/types.env";
import { Checkbox } from "react-native-paper";

const Checkboxes = ({
  index,
  items,
  status,
  tasks,
  id,
  tasksSetter,
  color
}: CheckboxProps) => {
  return (
    <Checkbox.Item
      style={{ margin: -10 }}
      key={index}
      label={items}
      status={status === items ? "checked" : "unchecked"}
      onPress={() => {
        tasksSetter(tasks, id, items);
      }}
      color={color}
      mode="android"
    />
  );
};

export default Checkboxes;
