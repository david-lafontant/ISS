import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import {
  PersonalInfos,
  SubmitInfos,
  ReviewInfos,
  DocumentsInfos,
} from "../../components/index";

const Forms = ({ navigation }) => {
  const [person, setPerson] = React.useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    NIF: "",
    CIN: "",
    stamp: "",
    photo: "",
  });
  const [screen, setScreen] = React.useState(0);
  const screenTitle = ["Infomasyon pesonel", "Pyes", "Fen"];

  const screenDisplay = () => {
    if (screen === 0) {
      return <PersonalInfos person={person} setPerson={setPerson} />;
    }
    switch (screen) {
      case 0:
        return <PersonalInfos person={person} setPerson={setPerson} />;
      case 1:
        return <DocumentsInfos person={person} setPerson={setPerson} />;
      case 2:
        return <ReviewInfos person={person} />;
      case 3:
        return <SubmitInfos person={person} />;
      default:
        const msg = "error";
        break;
    }
  };

  return (
    <SafeAreaView>
      <Text>{screenTitle[screen]}</Text>
      <View>{screenDisplay()}</View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => setScreen((prevValue) => prevValue - 1)}
        >
          <Text>Prev</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => setScreen((prevValue) => prevValue + 1)}
        >
          <Text>Next</Text>
        </Pressable>
      </View>
      <Button
        title="Go to Finish"
        onPress={() => navigation.navigate("Finish")}
      />
    </SafeAreaView>
  );
};

export default Forms;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#f9f9f9",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  button: {
    justifyContent: "center",
    color: "#fff",
    backgroundColor: "skyblue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: "center",
  },
});
