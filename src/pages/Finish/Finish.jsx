import React from "react";
import { useSelector } from "react-redux";
import QRCode from "react-native-qrcode-svg";
import { StyleSheet, Text, View, Button } from "react-native";

const Finish = ({ navigation }) => {
  const person = useSelector((store) => store.person);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Finish Screen</Text>
      <QRCode value={person.photo} />
      <View>
        <Text style={styles.text}>Non: {person.firstName}</Text>
        <Text style={styles.text}>Siyati : {person.lastName}</Text>
        <Text style={styles.text}>Adres : {person.street}</Text>
        <Text style={styles.text}>Komin : {person.city}</Text>
        <Text style={styles.text}>NIF : {person.NIF}</Text>
        <Text style={styles.text}>CIN : {person.CIN}</Text>
        <Text style={styles.text}>No timbre : {person.stamp}</Text>
        <Text style={styles.text}>Photo : {person.photo}</Text>
      </View>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Finish;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    marginBottom: 10,
    borderBottom: 2,
    borderColor: "cyan",
    padding: 10,
    fontWeight: "bold",
  },
});
