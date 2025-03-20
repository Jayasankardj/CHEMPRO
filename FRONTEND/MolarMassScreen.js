import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Profileoverlay from "./Profileoverlay";

const MolarMassScreen = () => {
    const [profileVisible, setProfileVisible] = useState(false);
  const navigation = useNavigation();
  const [formula, setFormula] = useState('');
  const [activeScreen, setActiveScreen] = useState('MolarMassScreen');

  const handleNavigation = (screen) => {
    setActiveScreen(screen);
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      {/* Profile Button */}
      <TouchableOpacity style={styles.profileButton} onPress={() => setProfileVisible(true)}>
        <Icon name="dashboard" size={40} color="#000" />
      </TouchableOpacity>
    
      <Profileoverlay isVisible={profileVisible} onClose={() => setProfileVisible(false)} />

      {/* Title */}
      <Text style={styles.title}>Molar Mass</Text>

      {/* Input Field */}
      <TextInput
        style={styles.input}
        placeholder="Enter a Chemical Formula"
        placeholderTextColor="#000"
        value={formula}
        onChangeText={setFormula}
      />

      {/* Calculate Button */}
      <TouchableOpacity style={styles.calculateButton} onPress={() => navigation.navigate('Calculation')}>
        <Text style={styles.calculateText}>Calculate</Text>
      </TouchableOpacity>

      {/* Example Text */}
      <Text style={styles.exampleText}>For example:</Text>
      <Text style={styles.formulaExample}>H₂SO₄</Text>

      {/* Instruction */}
      <Text style={styles.instructionText}>
        Make sure all small and capital letters are written correctly.
      </Text>

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
    backgroundColor: '#78C4D4',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 80, // Prevents bottom nav overlap
  },
  profileButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#000',
  },
  input: {
    width: '85%',
    backgroundColor: '#D3D3D3',
    padding: 12,
    borderRadius: 10,
    fontSize: 15,
    textAlign: 'center',
    color: '#000',
    marginBottom: 30,
  },
  calculateButton: {
    backgroundColor: '#2E86C1',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 50,
  },
  calculateText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  exampleText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  formulaExample: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 40,
  },
  instructionText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
    color: '#000',
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

export default MolarMassScreen;
