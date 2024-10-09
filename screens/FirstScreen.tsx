import { Text, Image, StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

export default function FirstScreen({ navigation }) {
  return (  
    <ScrollView contentContainerStyle={styles.container}>
      {/*Image tag require ../assets/images/Image 18.png*/}
      <Image
        source={require("../assets/images/big_banner.png")}
        style={styles.images}
      />
      <Text style={styles.title}>Boost Productivity</Text>
      <Text>Simplify tasks, boost productivity</Text>
      {/*Sign up with color button and login with un color button*/}
      <TouchableOpacity
        style={styles.colored_button}
        onPress={() => navigation.navigate("Second Screen")}
      >Sign up</TouchableOpacity>
      <TouchableOpacity
        style={styles.uncolored_button}
        onPress={() => navigation.navigate("Third Screen")}
      >Login</TouchableOpacity>
      {/*◌ ◉ ◌ view*/}
      <Text style={styles.color_text}>
      ◌ ◉ ◌
      </Text>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "white",
    padding: 20,
    height: "100%",
    gap: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  images: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  colored_button: {
    backgroundColor: "aqua",
    borderRadius: 10,
    color: "white",
    textAlign: "center",
    padding: 20,
  },
  uncolored_button: {
    backgroundColor: "transparent",
    borderRadius: 10,
    color: "aqua ",
    textAlign: "center",
    padding: 20,
    borderWidth: 1,
    borderColor: "green",
  },
  color_text:{
    color: "aqua",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center'
  }
});
