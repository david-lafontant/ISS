import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

const DocumentsInfos = ({ person, setPerson }) => {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPerson({ ...person, ["photo"]: result.assets[0].uri });
    }
  };

  return (
    <View style={styles.infoWrapper}>
      <Text>DocumentsInfos</Text>
      <TextInput
        style={styles.input}
        onChangeText={(NIF) => {
          setPerson({ ...person, NIF });
        }}
        value={person.NIF || ""}
        placeholder="NIF"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={(CIN) => {
          setPerson({ ...person, CIN });
        }}
        value={person.CIN || ""}
        placeholder="CIN"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        onChangeText={(stamp) => {
          setPerson({ ...person, stamp });
        }}
        value={person.stamp || ""}
        placeholder="timbre"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        onChangeText={(photo) => {
          setPerson({ ...person, photo });
        }}
        value={person.photo || ""}
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
