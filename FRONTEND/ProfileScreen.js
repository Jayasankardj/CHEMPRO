import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";
import { launchImageLibrary } from "react-native-image-picker";
import { API_BASE_URL } from "./config";

const ProfileScreen = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(route.params?.email || "");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [currentStudy, setCurrentStudy] = useState("");
  const [profilePicture, setProfilePicture] = useState(null); // Store profile picture URL

  useEffect(() => {
    if (!email) {
      Alert.alert("Error", "No email provided!");
      return;
    }
    fetchProfile();
  }, [email]);

  const fetchProfile = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/fetchProfile.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (data.status === "success" && data.profile) {
        setName(data.profile.name || "");
        setDateOfBirth(data.profile.date_of_birth || "");
        setGender(data.profile.gender || "");
        setCurrentStudy(data.profile.current_study || "");
        if (data.profile.profile_image) {
          setProfilePicture(`${API_BASE_URL}/${data.profile.profile_image}`);
        }
      } else {
        Alert.alert("Error", data.message || "Failed to load profile.");
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
      Alert.alert("Error", "Could not fetch profile.");
    }
  };

  const pickImage = () => {
    launchImageLibrary({ mediaType: "photo" }, async (response) => {
      if (response.didCancel) return;
      if (response.errorMessage) {
        Alert.alert("Error", response.errorMessage);
        return;
      }
      if (response.assets?.length > 0) {
        const selectedImage = response.assets[0].uri;
        setProfilePicture(selectedImage);
        await uploadImage(selectedImage);
      }
    });
  };

  const uploadImage = async (imageUri) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("profile_picture", {
      uri: imageUri,
      type: "image/jpeg",
      name: "profile.jpg",
    });

    try {
      const response = await fetch(`${API_BASE_URL}/uploadProfilePicture.php`, {
        method: "POST",
        body: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      const data = await response.json();
      if (data.status === "success") {
        Alert.alert("Success", "Profile picture updated!");
      } else {
        Alert.alert("Error", data.message);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      Alert.alert("Error", "Could not upload image.");
    }
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/profile.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          date_of_birth: dateOfBirth,
          gender,
          current_study: currentStudy,
        }),
      });
      const data = await response.json();
      if (data.status === "success") {
        Alert.alert("Success", "Profile updated successfully!");
        navigation.navigate("PeriodicTableScreen");
      } else {
        Alert.alert("Error", data.message);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      Alert.alert("Error", "Could not update profile.");
    }
  };

  return (
    <LinearGradient colors={["#78C4D4", "#147B96"]} style={styles.container}>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={30} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity onPress={pickImage} style={styles.profilePictureContainer}>
        {profilePicture ? (
          <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
        ) : (
          <Icon name="account-circle" size={100} color="#000" />
        )}
      </TouchableOpacity>

      <Text style={styles.title}>Profile</Text>

      <Text style={styles.label}>Name:</Text>
      <TextInput style={styles.input} value={name} editable={false} />

      <Text style={styles.label}>Email:</Text>
      <TextInput style={styles.input} value={email} editable={false} />

      <Text style={styles.label}>Date of Birth:</Text>
      <TextInput
        style={styles.input}
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
        placeholder="YYYY-MM-DD"
      />

      <Text style={styles.label}>Gender:</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={gender} onValueChange={setGender} style={styles.picker}>
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
          <Picker.Item label="Others" value="Others" />
        </Picker>
      </View>

      <Text style={styles.label}>Current Study:</Text>
      <TextInput style={styles.input} value={currentStudy} onChangeText={setCurrentStudy} />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: "center", justifyContent: "center" },
  navButton: { position: "absolute", top: 30, left: 20 },
  profilePictureContainer: { marginBottom: 20, alignItems: "center" },
  profilePicture: { width: 100, height: 100, borderRadius: 50, borderWidth: 2, borderColor: "#fff" },
  title: { fontSize: 32, fontWeight: "bold", color: "#000", marginBottom: 10 },
  label: { alignSelf: "flex-start", fontSize: 20, fontWeight: "bold", color: "#000", marginBottom: 10 },
  input: { width: "100%", height: 40, backgroundColor: "#D3D3D3", borderRadius: 5, paddingHorizontal: 10, marginBottom: 15 },
  pickerContainer: { width: "100%", height: 40, backgroundColor: "#D3D3D3", borderRadius: 5, justifyContent: "center", marginBottom: 10 },
  picker: { width: "100%", height: 50 },
  saveButton: { backgroundColor: "#E6E6E6", borderRadius: 25, paddingVertical: 10, paddingHorizontal: 40, marginTop: 50 },
  saveText: { fontSize: 20, fontWeight: "bold", color: "#000" },
});

export default ProfileScreen;
