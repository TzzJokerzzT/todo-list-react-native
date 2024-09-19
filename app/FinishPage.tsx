import { headerStyles } from "@/components/styles/Styles";
import Finish from "@/view/Finish";
import { Link, Stack } from "expo-router";
import { Text } from "react-native";
import { Icon } from "react-native-paper";

export default function FinishPage() {
  const { text } = headerStyles;

  return (
    <>
      <Stack.Screen
        options={{
          headerTintColor: "#fff",
          headerTitle: "Finish",
          headerTitleAlign: "center",
          headerTitleStyle: { fontWeight: "bold" },
          headerShadowVisible: true,
          headerStyle: { backgroundColor: "#066595" },
          headerLeft: () => <Text style={text}>ToDo List</Text>,
          headerRight: () => (
            <Link href="/">
              <Icon source="home-circle-outline" size={40} color="#fff" />
            </Link>
          ),
        }}
      />
      <Finish />
    </>
  );
}
