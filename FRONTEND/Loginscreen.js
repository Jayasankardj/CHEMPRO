import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { API_BASE_URL } from "./config";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Both fields are required.");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}login.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          password,
        }),
      });

      let result = await response.json();

      if (result.status === "success") {
        Alert.alert("Success", "Login successful!");
        navigation.navigate("PeriodicTableScreen");
      } else {
        Alert.alert("Error", result.message);
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again.");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.backButton}>
        <Icon name="arrow-left" size={30} color="#000" />
      </TouchableOpacity>
      <Icon name="lightbulb-o" size={50} color="black" style={styles.logo} />
      <Text style={styles.quote}>"Let's bond over some chemistry!"</Text>

      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your username"
      />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />

      <TouchableOpacity onPress={() => navigation.navigate("ForgotPasswordScreen")}>
        <Text style={styles.forgotPassword}>Forgot_Password?"</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.signupText}>Don’t have an account? <Text style={{ fontWeight: "bold" }}>Sign Up</Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7fd8f5",
    padding: 20,
    justifyContent: "center",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  logo: {
    alignSelf: "center",
    marginBottom: 20,
  },
  quote: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    fontSize: 14,
    marginBottom: 40,
  },
  loginButton: {
    backgroundColor: "#e0e0e0",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 10,
    width: 300,
    alignSelf: 'center',
  },
  loginText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  signupText: {
    textAlign: "center",
    marginTop: 10,
  },
});
