import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Ensure this library is installed

const ChangePasswordScreen = () => {
  const navigation = useNavigation();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={30} color="black" />
      </TouchableOpacity>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>
          <Text style={styles.logoBlack}>CHEM </Text>
          <Text style={styles.logoWhite}>PRO</Text>
        </Text>
      </View>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Old Password"
        placeholderTextColor="black"
        secureTextEntry
        value={oldPassword}
        onChangeText={setOldPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="New Password"
        placeholderTextColor="black"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />

      {/* Change Button */}
      <TouchableOpacity style={styles.changeButton} onPress={() => navigation.goBack()}>
        <Text style={styles.changeButtonText}>Change</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76D6FF', // Light blue gradient
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
  },
  logoContainer: {
    marginBottom: 100,
    borderWidth: 2,
    borderColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  logoBlack: {
    backgroundColor: 'black',
    color: 'white',
    padding: 5,
  },
  logoWhite: {
    color: 'black',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Transparent effect
    paddingVertical: 15,
    width: '80%',
    borderRadius: 20,
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },
  changeButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 15,
    width: '80%',
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  changeButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ChangePasswordScreen;
