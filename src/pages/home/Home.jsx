import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Home = ({ navigation }) => (
  <View
    style={[
      { flex: 1, alignItems: "center", justifyContent: "center" },
      styles.container,
    ]}
  >
    <Text>Immigration Scheduling System</Text>
    <Text style={{ textAlign: "justify" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum
    </Text>
    <Button title="Go to Form" onPress={() => navigation.navigate("Form")} />
  </View>
);

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
