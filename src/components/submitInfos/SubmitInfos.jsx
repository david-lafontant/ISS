import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const SubmitInfos = () => {
  const onTap = () => {
    console.log("Button touched!");
  };

  return (
    <View>
      <Text>SubmitInfos</Text>
      <Button title="SUBMIT" onPress={onTap} />
    </View>
  );
};

export default SubmitInfos;

const styles = StyleSheet.create({});
