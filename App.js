import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Forms from "./src/pages/forms/Forms";
import Header from "./src/components/header/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Forms />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    paddingTop: 10,
  },
});
