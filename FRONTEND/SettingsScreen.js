import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Ensure you have this library installed
import Profileoverlay from "./Profileoverlay";

const SettingsScreen = () => {
    const [profileVisible, setProfileVisible] = useState(false);
  const navigation = useNavigation();
  const [activeScreen, setActiveScreen] = useState('SettingsScreen');

  const handleNavigation = (screen) => {
    setActiveScreen(screen);
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.profileIcon} onPress={() => setProfileVisible(true)}>
        <Icon name="user-circle" size={40} color="#000" />
      </TouchableOpacity>
    
      <Profileoverlay isVisible={profileVisible} onClose={() => setProfileVisible(false)}/>

        <View style={styles.logoContainer}>
                <Text style={styles.logoText}>
                  <Text style={styles.logoBlack}>CHEM </Text>
                  <Text style={styles.logoWhite}>PRO</Text>
                </Text>
        </View>


      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChangePasswordScreen')}>
          <Text style={styles.buttonText}>🔑 Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PrivacyPolicyScreen')}>
          <Text style={styles.buttonText}>🔏 Privacy Policy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DeleteScreen')}>
          <Text style={styles.buttonText}>🧾 Delete Account</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
      <TouchableOpacity 
        onPress={() => handleNavigation('PeriodicTableScreen')} 
        style={[styles.navButton, activeScreen === 'PeriodicTableScreen' && styles.activeNav]}
      >
        <Text style={styles.navText}>🏠</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => handleNavigation('MolarMassScreen')} 
        style={[styles.navButton, activeScreen === 'MolarMassScreen' && styles.activeNav]}
      >
        <Text style={styles.navText}>⚖️</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => handleNavigation('QuizHomeScreen')} 
        style={[styles.navButton, activeScreen === 'QuizHomeScreen' && styles.activeNav]}
      >
        <Text style={styles.navText}>💡</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => handleNavigation('SettingsScreen')} 
        style={[styles.navButton, activeScreen === 'SettingsScreen' && styles.activeNav]}
      >
        <Text style={styles.navText}>⚙️</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76D6FF', // Light blue background
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  logoContainer: {
    marginBottom: 100,
    borderWidth: 2,
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
  buttonContainer: {
    width: '80%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Transparent button effect
    paddingVertical: 15,
    width: '100%',
    borderRadius: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#000',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  navButton: {
    padding: 10,
  },
  navText: {
    fontSize: 20,
    color: 'white',
  },
  activeNav: {
    borderBottomWidth: 3,
    borderBottomColor: 'white', // White underline for active icon
  },
});

export default SettingsScreen;
