import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Home = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Home Screen</Text>
    <Button title="Go to Form" onPress={() => navigation.navigate("Form")} />
  </View>
);

export default Home;

const styles = StyleSheet.create({});
