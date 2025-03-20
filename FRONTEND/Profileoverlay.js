import React from 'react';
import { View, Text, Modal, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { API_BASE_URL } from "./config";

const Profileoverlay = ({ isVisible, onClose }) => {
  const navigation = useNavigation(); 
  return (
    <Modal transparent={true} visible={isVisible} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.overlayContent}>
          
          {/* Close Button */}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>&times;</Text>
          </TouchableOpacity>

          {/* Profile Picture */}
          <Image source={require("./assets/Dj.jpg")} style={styles.profilePic} />

          {/* Student Name & Email */}
          <Text style={styles.name}>🧑‍🎓 Student Name</Text>
          <Text style={styles.email}>✉️ Student Email</Text>

          {/* Edit Profile Button */}
          <TouchableOpacity style={styles.editProfile} onPress={() => navigation.navigate("ProfileScreen")}>
            <Text style={styles.editText}>Edit Profile</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          {/* Menu Items */}
          <TouchableOpacity style={styles.menuItem}><Text style={styles.menutext}>🔗 Invite Friends</Text></TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}><Text style={styles.menutext}>ℹ️ About Us</Text></TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}><Text style={styles.menutext}>⭐ Rate Us</Text></TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}onPress={() => navigation.navigate("Loginscreen")} ><Text style={styles.menutext}>🚪 Log Out</Text></TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'top',
    alignItems: 'left',
  },
  overlayContent: {
    width: 250,
    height: '95%',
    backgroundColor: '#2D6C73',
    borderRadius: 15,
    padding: 20,
    alignItems: 'left',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 15,
  },
  closeText: {
    fontSize: 30,
    color: '#000',
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginVertical: 50,
  },
  name: {
    fontSize: 20,
    color: '#000',
    marginBottom: 20
  },
  email: {
    fontSize: 20,
    color: '#000',
    marginBottom: 40,
  },
  editProfile: {
    backgroundColor: '#FFF',
    padding: 8,
    borderRadius: 20,
    marginBottom: 40,
  },
  editText: {
    fontSize: 20,
    color: '#000',
    alignContent: 'center',
    left: 40,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#FFF',
    marginBottom: 10,
  },
  menuItem: {
    paddingVertical: 10,
  },
  menutext: {
    fontSize: 20,

  }
});

export default Profileoverlay;
