import Buttons from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Pick from "@/components/ui/Picker";
import { TodoListContext } from "@/context/TodoList";
import { ContextProps } from "@/types/types.env";
import { useContext } from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  formContainer: {
    width: "80%",
    marginBottom: 20,
    marginTop: 20,
  },
});

const FormTasks = () => {
  //Context
  const { formData, onChange, onSubmit } = useContext(
    TodoListContext
  ) as ContextProps;

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Input
          value={formData.task}
          data="task"
          onChange={onChange}
          label="Add your task"
        />
        <Input
          value={formData.description}
          data="description"
          onChange={onChange}
          label="Add description"
        />
        <Pick formData={formData} onChange={onChange} />
        <Buttons
          icon="check"
          mode="contained"
          onPress={onSubmit}
          buttonColor="#2bb2f6"
        >
          Add Task
        </Buttons>
      </View>
    </View>
  );
};

export default FormTasks;
