import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    top: 830,
  },
});
const FabButton = () => {
  //State
  return (
    <Link style={styles.fab} href="./NewTasks">
      <FAB icon="plus" color="white" style={{ backgroundColor: "#2bb2f6" }} />
    </Link>
  );
};

export default FabButton;
