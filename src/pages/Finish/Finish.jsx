import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Finish = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>About Screen</Text>
    <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
  </View>
);

export default Finish;

const styles = StyleSheet.create({});
