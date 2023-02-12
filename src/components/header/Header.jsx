import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageHeading}>
        <Image source={require("../../../assets/logo3.png")} />
      </View>
      <View style={styles.textHeading}>
        <Text style={styles.heading}>
          {" "}
          Direction de l'Immigration et de l'Émigration
        </Text>
        <Text style={styles.heading}> Republique d'Haiti</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "skyblue",
    alignItems: "center",
  },
  imageHeading: {
    width: "30%",
  },
  textHeading: {
    width: "60%",
  },
  heading: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
