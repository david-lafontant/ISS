import React, { useState } from "react";
import "react-native-gesture-handler";
import AnimatedSplash from "react-native-animated-splash-screen";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./src/components/header/Header";
import { Forms, Home, Finish } from "./src/pages/index";
const Drawer = createDrawerNavigator();
export default function App() {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 1000);

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={loading}
      logoImage={require("./assets/logo3.png")}
      backgroundColor={"#262626"}
      logoHeight={200}
      logoWidth={200}
    >
      <View style={styles.container}>
        <Header />
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Form" component={Forms} />
            <Drawer.Screen name="Finish" component={Finish} />
          </Drawer.Navigator>
        </NavigationContainer>

        <StatusBar style="auto" />
      </View>
    </AnimatedSplash>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    paddingTop: 10,
  },
});
