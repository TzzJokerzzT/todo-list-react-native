import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#69b6ec",
    marginBottom: 10,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#0e4368",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

export const headerStyles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 30,
  },
});