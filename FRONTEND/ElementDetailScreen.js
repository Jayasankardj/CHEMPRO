import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Linking } from "react-native"; // Import Linking
import { API_BASE_URL } from "./config";

const openWikipedia = (elementName) => {
  const url = `https://en.wikipedia.org/wiki/${elementName}`;
  Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
};
const ElementDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { element } = route.params || {}; // Handle potential undefined params

  if (!element) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: Element data not found!</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backText}>⬅ Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>⬅</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openWikipedia(element.name)} style={styles.wikiButton}>
        <Text style={styles.wikiText}>Wikipedia</Text>
      </TouchableOpacity>
    
      <View style={styles.elementContainer}>
        <View style={styles.elementHeader}>
          <View style={[styles.elementSymbol, { backgroundColor: element.color || '#ccc' }]}>
            <Text style={styles.symbolText}>{element.symbol || ''}</Text>
            <Text style={styles.nameText}>{element.name || 'F Block Elements'}</Text>
          </View>
        </View>

        <View style={styles.propertyList}>
          <Text style={styles.propertyItem}>Atomic Number: <Text style={styles.value}>{element.atomicNumber ?? 'N/A'}</Text></Text>
          <Text style={styles.propertyItem}>Mass: <Text style={styles.value}>{element.mass ?? 'N/A'}</Text></Text>
          <Text style={styles.propertyItem}>Electronic Configuration: <Text style={styles.value}>{element.configuration ?? 'N/A'}</Text></Text>
          <Text style={styles.propertyItem}>Electrons: <Text style={styles.value}>{element.electrons ?? 'N/A'}</Text></Text>
          <Text style={styles.propertyItem}>Protons: <Text style={styles.value}>{element.protons ?? 'N/A'}</Text></Text>
          <Text style={styles.propertyItem}>Neutrons: <Text style={styles.value}>{element.neutrons ?? 'N/A'}</Text></Text>
          <Text style={styles.propertyItem}>Melting Point: <Text style={styles.value}>{element.meltingPoint ? `${element.meltingPoint}°C` : 'N/A'}</Text></Text>
          <Text style={styles.propertyItem}>Boiling Point: <Text style={styles.value}>{element.boilingPoint ? `${element.boilingPoint}°C` : 'N/A'}</Text></Text>
          <Text style={styles.propertyItem}>Valence: <Text style={styles.value}>{element.valence ?? 'N/A'}</Text></Text>
          <Text style={styles.propertyItem}>Ionization Energy: <Text style={styles.value}>{element.ionizationEnergy ?? 'N/A'}</Text></Text>
          <Text style={styles.propertyItem}>Electronegativity: <Text style={styles.value}>{element.electronegativity ?? 'N/A'}</Text></Text>
          <Text style={styles.propertyItem}>Thermal Conductivity: <Text style={styles.value}>{element.thermalConductivity ?? 'N/A'}</Text></Text>
          <Text style={styles.propertyItem}>Phase of Matter: <Text style={styles.value}>{element.phase ?? 'N/A'}</Text></Text>
          <Text style={styles.propertyItem}>Speed of Index: <Text style={styles.value}>{element.speedIndex ?? 'N/A'}</Text></Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#76D6FF', alignItems: 'center', paddingTop: 20 },
  backButton: { position: 'absolute', left: 20, top: 20 },
  backText: { fontSize: 30 },
  header: { fontSize: 20, fontWeight: 'bold', alignSelf: 'center', marginTop: 10 },
  elementContainer: { backgroundColor: '#FFFF66', width: '85%', borderRadius: 20, padding: 20, marginTop: 100 },
  elementHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  elementSymbol: { width: 80, height: 80, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  symbolText: { fontSize: 24, fontWeight: 'bold', color: 'white' },
  nameText: { fontSize: 12, fontWeight: 'bold', color: 'white' },
  propertyList: { marginTop: 20, marginBottom: 10},
  propertyItem: { fontSize: 20, fontWeight: 'bold', color: '#000', marginVertical: 4 },
  value: { fontWeight: 'normal' },
  errorText: { fontSize: 18, color: 'red', marginTop: 20 },
  
  wikiButton: {
    position: "absolute",
    top: 35,
    right: 20,
    backgroundColor: "blue",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    zIndex: 10, // Ensures it stays above other content
  },
  
  wikiText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
    
});

export default ElementDetailScreen;
