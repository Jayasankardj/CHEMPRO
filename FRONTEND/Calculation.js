import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const Calculation = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { formula, result } = route.params || { formula: "", result: null };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Molar Mass</Text>
      <TextInput
        style={styles.input}
        value={formula}
        editable={false} // Disable editing
      />
      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Molar Mass: {result.molarMass}</Text>
          <Text style={styles.sectionTitle}>Elements and Mass:</Text>
          {result.elements.map((el, index) => (
            <Text key={index} style={styles.elementText}>
              {el.symbol} - {el.mass}
            </Text>
          ))}
          <Text style={styles.sectionTitle}>Mass Calculation:</Text>
          {result.massBreakdown.map((calc, index) => (
            <Text key={index} style={styles.elementText}>
              {calc}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#7CE0FF", padding: 20 },
  backButton: { position: "absolute", top: 20, left: 20 },
  backText: { fontSize: 24 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginTop: 50 },
  input: { backgroundColor: "#ddd", padding: 10, fontSize: 20, textAlign: "center", marginVertical: 20 },
  resultContainer: { backgroundColor: "#ddd", padding: 15, borderRadius: 10, marginTop: 20 },
  resultText: { fontSize: 18, fontWeight: "bold" },
  sectionTitle: { fontSize: 16, fontWeight: "bold", marginTop: 10 },
  elementText: { fontSize: 16 },
});

export default Calculation;
