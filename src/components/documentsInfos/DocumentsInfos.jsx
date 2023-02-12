import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

const DocumentsInfos = ({ person, setPerson }) => {
  return (
    <View style={styles.infoWrapper}>
      <Text>DocumentsInfos</Text>
      <TextInput
        style={styles.input}
        onChangeText={(NIF) => {
          setPerson({ ...person, NIF });
        }}
        value={person.NIF}
        placeholder="NIF"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={(CIN) => {
          setPerson({ ...person, CIN });
        }}
        value={person.CIN}
        placeholder="CIN"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        onChangeText={(stamp) => {
          setPerson({ ...person, stamp });
        }}
        value={person.stamp}
        placeholder="timbre"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        onChangeText={(photo) => {
          setPerson({ ...person, photo });
        }}
        value={person.photo}
        placeholder="foto timb la"
      />
    </View>
  );
};

export default DocumentsInfos;

const styles = StyleSheet.create({
  infoWrapper: {
    backgroundColor: "coral",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#f9f9f9",
  },
});
