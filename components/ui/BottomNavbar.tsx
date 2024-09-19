import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
import Buttons from "./Button";
import { Badge } from "react-native-paper";
import { useContext } from "react";
import { TodoListContext } from "@/context/TodoList";
import { ContextProps } from "@/types/types.env";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    backgroundColor: "#066595",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

const BottomNavbar = () => {
  //Context
  const { pending, working, finish } = useContext(
    TodoListContext
  ) as ContextProps;

  const section = [
    {
      title: "Pending",
      url: "./PendingPage",
      icon: "lead-pencil",
      badge: pending,
    },
    {
      title: "Working",
      url: "./WorkingPage",
      icon: "account-supervisor",
      badge: working,
    },
    {
      title: "Finish",
      url: "./FinishPage",
      icon: "check-circle-outline",
      badge: finish,
    },
  ];
  return (
    <View style={styles.container}>
      {section.map(({ title, url, icon, badge }, index) => {
        return (
          <>
            <Link
              style={{ position: "relative", top: 0, left: 20 }}
              key={index}
              href={url}
            >
              <Buttons buttonColor="#2db0f2" mode="contained" icon={icon}>
                {title}
              </Buttons>
            </Link>
            <Badge
              style={{
                position: "relative",
                top: -55,
                right: 10,
                opacity: badge > 0 ? 1 : 0,
              }}
            >
              {badge}
            </Badge>
          </>
        );
      })}
    </View>
  );
};

export default BottomNavbar;
