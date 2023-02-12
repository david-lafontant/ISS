import { StyleSheet, Text, View } from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";

const ReviewInfos = ({ person }) => {
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
};

export default ReviewInfos;

const styles = StyleSheet.create({});
