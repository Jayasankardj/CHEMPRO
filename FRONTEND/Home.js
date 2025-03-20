import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Button } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Home = ({navigation}) => {
  const handleLogin = () => {
    navigation.navigate('Loginscreen');
  };
  
  return (
    <LinearGradient colors={["#71E1FF", "#1D8DAB"]} style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logoBox}>
          <Text style={styles.chemText}>CHEM</Text>
          <Text style={styles.proText}>PRO</Text>
        </View>
      </View>

      <Text style={styles.heading}>EXPLORE THE WORLD OF CHEMISTRY</Text>
      <Image source={require("./assets/rocket.png")} style={styles.rocket} />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logoContainer: {
    marginBottom: 80,
  },
  logoBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
  },
  chemText: {
    backgroundColor: "#000",
    color: "#FFF",
    fontSize: 50,
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  proText: {
    fontSize: 50,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  rocket: {
    width: 350,
    height: 200,
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#E5E5E5",
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 50,
    marginup: 50,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  
});

export default Home;