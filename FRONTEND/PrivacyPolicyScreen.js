import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PrivacyPolicyScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* CHEM PRO Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>
          <Text style={styles.chem}>CHEM</Text> <Text style={styles.pro}>PRO</Text>
        </Text>
      </View>

      {/* Privacy Message Box */}
      <View style={styles.privacyBox}>
  <Text style={styles.privacyText}>
    <Text style={styles.italic}>We value your privacy.</Text>{'\n'}
    Your data is securely stored on your device and never shared with third parties.{'\n\n'}
    
    We do not misuse your data in any way. It is handled with the utmost security and used only for the intended purpose within the app.{'\n\n'}

    <Text style={styles.italic}>Please contact support if you have any concerns.</Text>
  </Text>
</View>


      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#71d4ff', // Light blue gradient effect
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    marginBottom: 90 , 
    borderWidth: 2,
    borderColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  chem: {
    backgroundColor: 'black',
    color: 'white',
    paddingHorizontal: 5,
  },
  pro: {
    color: 'black',
  },
  privacyBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent box
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 30,
  },
  privacyText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
  italic: {
    fontStyle: 'italic',
  },
  backButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  backText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PrivacyPolicyScreen;
