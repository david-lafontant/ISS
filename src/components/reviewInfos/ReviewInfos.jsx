import React from "react";
import { StyleSheet, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

const ReviewInfos = ({ person }) => {
  if (Object.values(person).includes("")) {
    return (
      <View>
        <Text>Please fill the form</Text>
      </View>
    );
  } else {
    return (
      <View>
        <View>
          <Text>Non: {person.firstName}</Text>
          <Text>Siyati: {person.lastName}</Text>
          <Text>Adres: {person.street}</Text>
          <Text>Komin: {person.city}</Text>
          <Text>NIF: {person.NIF}</Text>
          <Text>CIN: {person.CIN}</Text>
          <Text>No timbre: {person.timbre}</Text>
          <Text>Photo: {person.photo}</Text>
        </View>
        <View>
          <QRCode value={person.NIF} />
        </View>
      </View>
    );
  }
};

export default ReviewInfos;

const styles = StyleSheet.create({});
