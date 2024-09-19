import { ScrollView, StyleSheet, View } from "react-native";
import Messages from "../components/ui/Messages";
import { TodoListContext } from "@/context/TodoList";
import { ContextProps, LayoutProps } from "@/types/types.env";
import { useContext } from "react";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "-8%",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  tasksContainer: {
    alignItems: "center",
    width: "100%",
    height: "80%",
  },
});

const ScreenLayout = ({ children }: LayoutProps) => {
  const { tasks } = useContext(TodoListContext) as ContextProps;
  return (
    <View style={styles.container}>
      {tasks.length === 0 ? (
        <Messages />
      ) : (
        <View style={styles.tasksContainer}>
          <ScrollView style={{ padding: 0, margin: 0, width: "80%" }}>
            {children}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default ScreenLayout;
