import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const PersonalInfos = ({ person, setPerson }) => {
  return (
    <View style={styles.infoWrapper}>
      <Text>PersonalInfos</Text>
      <TextInput
        style={styles.input}
        onChangeText={(lastName) => {
          setPerson({ ...person, lastName });
        }}
        value={person.lastName || ""}
        placeholder="Siyati"
      />
      <TextInput
        style={styles.input}
        onChangeText={(firstName) => {
          setPerson({ ...person, firstName });
        }}
        value={person.firstName || ""}
        placeholder="Non"
      />
      <TextInput
        style={styles.input}
        onChangeText={(street) => {
          setPerson({ ...person, street });
        }}
        value={person.street || ""}
        placeholder="Adres ...ex: #24 ri joli"
      />
      <TextInput
        style={styles.input}
        onChangeText={(city) => {
          setPerson({ ...person, city });
        }}
        value={person.city || ""}
        placeholder="Komin .. ex: petion-vil"
      />
    </View>
  );
};

export default PersonalInfos;

const styles = StyleSheet.create({
  infoWrapper: {
    backgroundColor: "beige",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#f9f9f9",
  },
});
