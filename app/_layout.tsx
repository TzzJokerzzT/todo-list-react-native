import { DefaultTheme, Icon, PaperProvider } from "react-native-paper";
import { Link, Stack } from "expo-router";
import { TodoListProvider } from "@/context/TodoList";
import BottomNavbar from "@/components/ui/BottomNavbar";
import { StyleSheet, Text } from "react-native";
import { headerStyles } from "@/components/styles/Styles";

export default function Layout() {
  const { text } = headerStyles;

  return (
    <TodoListProvider>
      <PaperProvider theme={DefaultTheme}>
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: "#066595" },
            headerTintColor: "#fff",
            headerTitle: "",
            headerTitleStyle: { fontWeight: "bold" },
            headerTitleAlign: "center",
            headerLeft: () => <Text style={text}>ToDo List</Text>,
            headerRight: () => (
              <Link href="/">
                <Icon source="home-circle-outline" size={40} color="#fff" />
              </Link>
            ),
          }}
        />
        <BottomNavbar />
      </PaperProvider>
    </TodoListProvider>
  );
}
