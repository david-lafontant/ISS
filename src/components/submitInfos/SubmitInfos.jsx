import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { addPerson } from "../../features/personSlice";

const SubmitInfos = ({ person }) => {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>SubmitInfos</Text>
      <Button title="SUBMIT" onPress={() => dispatch(addPerson(person))} />
    </View>
  );
};

export default SubmitInfos;

const styles = StyleSheet.create({});
