import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/MaterialIcons"; // Using Material Icons

const DeleteScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={32} color="black" />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
              <Text style={styles.logoText}>
                <Text style={styles.logoBlack}>CHEM </Text>
                <Text style={styles.logoWhite}>PRO</Text>
              </Text>
            </View>

      {/* Warning Message */}
      <View style={styles.messageBox}>
        <Text style={styles.messageText}>
          <Text style={styles.italic}>Deleted Data cannot be retrieved.{'\n'}Are you Sure?</Text>
        </Text>
      </View>

      {/* Delete Button */}
      <TouchableOpacity style={styles.deleteButton} onPress={() => navigation.navigate('Loginscreen')}>
        <Text style={styles.deleteText}>Delete</Text>
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
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
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
  messageBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  messageText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
  },
  italic: {
    fontStyle: 'italic',
  },
  deleteButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  deleteText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DeleteScreen;
