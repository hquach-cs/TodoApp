import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableHighlight,
} from "react-native";

export const Task = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight * 1.5,
  },
});
