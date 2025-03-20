import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
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
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/fetchProfile.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setName(data.profile.name);
          setDateOfBirth(data.profile.date_of_birth || "");
          setGender(data.profile.gender || "");
          setCurrentStudy(data.profile.current_study || "");
          setProfilePicture(data.profile.profile_image ? `${API_BASE_URL}/${data.profile.profile_image}` : null);
        } else {
          alert(data.message);
        }
      })
      .catch((error) => console.error("Error fetching profile:", error));
  }, []);

  const pickImage = () => {
    launchImageLibrary({ mediaType: "photo" }, (response) => {
      if (response.didCancel) return;
      if (response.errorMessage) {
        alert("Error selecting image: " + response.errorMessage);
        return;
      }
      if (response.assets && response.assets.length > 0) {
        const selectedImage = response.assets[0].uri;
        setProfilePicture(selectedImage);
        uploadImage(selectedImage);
      }
    });
  };

  const uploadImage = (imageUri) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("profile_picture", {
      uri: imageUri,
      type: "image/jpeg",
      name: "profile.jpg",
    });

    fetch(`${API_BASE_URL}/uploadProfilePicture.php`, {
      method: "POST",
      body: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert("Profile picture updated!");
        } else {
          alert(data.message);
        }
      })
      .catch((error) => console.error("Error uploading image:", error));
  };

  const handleSave = () => {
    fetch(`${API_BASE_URL}/profile.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, date_of_birth: dateOfBirth, gender, current_study: currentStudy }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert("Profile updated successfully!");
          navigation.navigate("PeriodicTableScreen");
        } else {
          alert(data.message);
        }
      })
      .catch((error) => console.error("Error updating profile:", error));
  };

  return (
    <LinearGradient colors={["#78C4D4", "#147B96"]} style={styles.container}>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-forward" size={30} color="#000" />
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

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: "center", justifyContent: "center" },
  profilePicture: { width: 100, height: 100, borderRadius: 50, borderWidth: 2, borderColor: "#fff" },
});

export default ProfileScreen;
