import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
  },
});

const Messages = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Icon
          source="checkbox-marked-circle-plus-outline"
          size={100}
          color="black"
        />
      </View>
      <Text style={styles.text}>
        Please add some tasks. Please press + button
      </Text>
    </View>
  );
};

export default Messages;
