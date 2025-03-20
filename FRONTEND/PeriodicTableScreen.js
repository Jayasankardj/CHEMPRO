import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/MaterialIcons"; // Using Material Icons
import Profileoverlay from "./Profileoverlay";

const categories = [
  { name: "Alkali Metals", color: "#FF6666" },
  { name: "Alkaline Earth Metals", color: "#FFCC66" },
  { name: "Transition Metals", color: "#FFD700" },
  { name: "Post-transition Metals", color: "#CCCCCC" },
  { name: "Metalloids", color: "#66FF99" },
  { name: "Nonmetals", color: "#66CCFF" },
  { name: "Halogens", color: "#FF66FF" },
  { name: "Noble Gases", color: "#9999FF" },
  { name: "Lanthanides & Actinides", color: "#FF9966" },
];

const elements = [
  [{ symbol: "H", name: "Hydrogen", number: 1, color: "blue" }, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, { symbol: "He", name: "Helium", number: 2, color: "darkcyan" }],
  
  // Period 2
  [{ symbol: "Li", name: "Lithium", number: 3, color: "indigo" }, { symbol: "Be", name: "Beryllium", number: 4, color: "orange" }, null, null, null, null, null, null, null, null, null, null, { symbol: "B", name: "Boron", number: 5, color: "green" }, { symbol: "C", name: "Carbon", number: 6, color: "blue" }, { symbol: "N", name: "Nitrogen", number: 7, color: "blue" }, { symbol: "O", name: "Oxygen", number: 8, color: "blue" }, { symbol: "F", name: "Fluorine", number: 9, color: "olive" }, { symbol: "Ne", name: "Neon", number: 10, color: "darkcyan" }],
  
  // Period 3
  [{ symbol: "Na", name: "Sodium", number: 11, color: "indigo" }, { symbol: "Mg", name: "Magnesium", number: 12, color: "orange" }, null, null, null, null, null, null, null, null, null, null, { symbol: "Al", name: "Aluminium", number: 13, color: "gray" }, { symbol: "Si", name: "Silicon", number: 14, color: "green" }, { symbol: "P", name: "Phosphorus", number: 15, color: "blue" }, { symbol: "S", name: "Sulfur", number: 16, color: "blue" }, { symbol: "Cl", name: "Chlorine", number: 17, color: "olive" }, { symbol: "Ar", name: "Argon", number: 18, color: "darkcyan" }],
  
  // Period 4
  [{ symbol: "K", name: "Potassium", number: 19, color: "indigo" }, { symbol: "Ca", name: "Calcium", number: 20, color: "orange" }, { symbol: "Sc", name: "Scandium", number: 21, color: "brown" }, { symbol: "Ti", name: "Titanium", number: 22, color: "brown" }, { symbol: "V", name: "Vanadium", number: 23, color: "brown" }, { symbol: "Cr", name: "Chromium", number: 24, color: "brown" }, { symbol: "Mn", name: "Manganese", number: 25, color: "brown" }, { symbol: "Fe", name: "Iron", number: 26, color: "brown" }, { symbol: "Co", name: "Cobalt", number: 27, color: "brown" }, { symbol: "Ni", name: "Nickel", number: 28, color: "brown" }, { symbol: "Cu", name: "Copper", number: 29, color: "brown" }, { symbol: "Zn", name: "Zinc", number: 30, color: "brown" }, { symbol: "Ga", name: "Gallium", number: 31, color: "gray" }, { symbol: "Ge", name: "Germanium", number: 32, color: "green" }, { symbol: "As", name: "Arsenic", number: 33, color: "green" }, { symbol: "Se", name: "Selenium", number: 34, color: "blue" }, { symbol: "Br", name: "Bromine", number: 35, color: "olive" }, { symbol: "Kr", name: "Krypton", number: 36, color: "darkcyan" }],
  
  // Period 5
  [{ symbol: "Rb", name: "Rubidium", number: 37, color: "indigo" }, { symbol: "Sr", name: "Strontium", number: 38, color: "orange" }, { symbol: "Y", name: "Yttrium", number: 39, color: "brown" }, { symbol: "Zr", name: "Zirconium", number: 40, color: "brown" }, { symbol: "Nb", name: "Niobium", number: 41, color: "brown" }, { symbol: "Mo", name: "Molybdenum", number: 42, color: "brown" }, { symbol: "Tc", name: "Technetium", number: 43, color: "brown" }, { symbol: "Ru", name: "Ruthenium", number: 44, color: "brown" }, { symbol: "Rh", name: "Rhodium", number: 45, color: "brown" }, { symbol: "Pd", name: "Palladium", number: 46, color: "brown" }, { symbol: "Ag", name: "Silver", number: 47, color: "brown" }, { symbol: "Cd", name: "Cadmium", number: 48, color: "brown" }, { symbol: "In", name: "Indium", number: 49, color: "gray" }, { symbol: "Sn", name: "Tin", number: 50, color: "gray" }, { symbol: "Sb", name: "Antimony", number: 51, color: "green" },{ symbol: "Te", name: "Tellurium", number: 52, color: "green" }, { symbol: "I", name: "Iodine", number: 53, color: "olive" }, { symbol: "Xe", name: "Xenon", number: 54, color: "darkcyan" }],

  // Period 6 (without f-block)
  [{ symbol: "Cs", name: "Cesium", number: 55, color: "indigo" }, { symbol: "Ba", name: "Barium", number: 56, color: "orange" }, {symbol: "57-71", name:"Lanthanides", color: "purple"}, { symbol: "Hf", name: "Hafnium", number: 72, color: "brown" }, { symbol: "Ta", name: "Tantalum", number: 73, color: "brown" }, { symbol: "W", name: "Tungsten", number: 74, color: "brown" }, { symbol: "Re", name: "Rhenium", number: 75, color: "brown" }, { symbol: "Os", name: "Osmium", number: 76, color: "brown" }, { symbol: "Ir", name: "Iridium", number: 77, color: "brown" }, { symbol: "Pt", name: "Platinum", number: 78, color: "brown" }, { symbol: "Au", name: "Gold", number: 79, color: "brown" }, { symbol: "Hg", name: "Mercury", number: 80, color: "brown" }, { symbol: "Tl", name: "Thallium", number: 81, color: "gray" }, { symbol: "Pb", name: "Lead", number: 82, color: "gray" }, { symbol: "Bi", name: "Bismuth", number: 83, color: "gray" }, { symbol: "Po", name: "Polonium", number: 84, color: "green" }, { symbol: "At", name: "Astatine", number: 85, color: "olive" }, { symbol: "Rn", name: "Radon", number: 86, color: "darkcyan" }],
  
  // Period 7 (without f-block)
  [{ symbol: "Fr", name: "Francium", number: 87, color: "indigo" }, { symbol: "Ra", name: "Radium", number: 88, color: "orange" }, {symbol: "89-103",name:"Actinides", color: "red"} , { symbol: "Rf", name: "Rutherfordium", number: 104, color: "brown" }, { symbol: "Db", name: "Dubnium", number: 105, color: "brown" }, { symbol: "Sg", name: "Seaborgium", number: 106, color: "brown" }, { symbol: "Bh", name: "Bohrium", number: 107, color: "brown" }, { symbol: "Hs", name: "Hassium", number: 108, color: "brown" }, { symbol: "Mt", name: "Meitnerium", number: 109, color: "brown" }, { symbol: "Ds", name: "Darmstadtium", number: 110, color: "brown" }, { symbol: "Rg", name: "Roentgenium", number: 111, color: "brown" }, { symbol: "Cn", name: "Copernicium", number: 112, color: "brown" }, { symbol: "Nh", name: "Nihonium", number: 113, color: "gray" }, { symbol: "Fl", name: "Flerovium", number: 114, color: "gray" }, { symbol: "Mc", name: "Moscovium", number: 115, color: "gray" }, { symbol: "Lv", name: "Livermorium", number: 116, color: "gray" }, { symbol: "Ts", name: "Tennessine", number: 117, color: "olive" }, { symbol: "Og", name: "Oganesson", number: 118, color: "darkcyan" }]
];

const fBlockElements = [
  // Lanthanides (Period 6)
  [
    { symbol: "La", name: "Lanthanum", number: 57, color: "purple" },
    { symbol: "Ce", name: "Cerium", number: 58, color: "purple" },
    { symbol: "Pr", name: "Praseodymium", number: 59, color: "purple" },
    { symbol: "Nd", name: "Neodymium", number: 60, color: "purple" },
    { symbol: "Pm", name: "Promethium", number: 61, color: "purple" },
    { symbol: "Sm", name: "Samarium", number: 62, color: "purple" },
    { symbol: "Eu", name: "Europium", number: 63, color: "purple" },
    { symbol: "Gd", name: "Gadolinium", number: 64, color: "purple" },
    { symbol: "Tb", name: "Terbium", number: 65, color: "purple" },
    { symbol: "Dy", name: "Dysprosium", number: 66, color: "purple" },
    { symbol: "Ho", name: "Holmium", number: 67, color: "purple" },
    { symbol: "Er", name: "Erbium", number: 68, color: "purple" },
    { symbol: "Tm", name: "Thulium", number: 69, color: "purple" },
    { symbol: "Yb", name: "Ytterbium", number: 70, color: "purple" },
    { symbol: "Lu", name: "Lutetium", number: 71, color: "purple" },
  ],

  // Actinides (Period 7)
  [
    { symbol: "Ac", name: "Actinium", number: 89, color: "red" },
    { symbol: "Th", name: "Thorium", number: 90, color: "red" },
    { symbol: "Pa", name: "Protactinium", number: 91, color: "red" },
    { symbol: "U", name: "Uranium", number: 92, color: "red" },
    { symbol: "Np", name: "Neptunium", number: 93, color: "red" },
    { symbol: "Pu", name: "Plutonium", number: 94, color: "red" },
    { symbol: "Am", name: "Americium", number: 95, color: "red" },
    { symbol: "Cm", name: "Curium", number: 96, color: "red" },
    { symbol: "Bk", name: "Berkelium", number: 97, color: "red" },
    { symbol: "Cf", name: "Californium", number: 98, color: "red" },
    { symbol: "Es", name: "Einsteinium", number: 99, color: "red" },
    { symbol: "Fm", name: "Fermium", number: 100, color: "red" },
    { symbol: "Md", name: "Mendelevium", number: 101, color: "red" },
    { symbol: "No", name: "Nobelium", number: 102, color: "red" },
    { symbol: "Lr", name: "Lawrencium", number: 103, color: "red" },
  ],
];

const PeriodicTableScreen = () => {
  const [profileVisible, setProfileVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();
  const [activeScreen, setActiveScreen] = useState('Home');
  
  const handleNavigation = (screen) => {
    setActiveScreen(screen);
    navigation.navigate(screen);
  };

  const toggleModal = () => {
    setIsModalVisible(prev => !prev);
  };

  return (
    <View style={styles.container}>
      {/* Logo Button */}
      <TouchableOpacity onPress={() => setProfileVisible(true)} style={styles.logoButton}>
        <Icon name="dashboard" size={30} color="#000" />
      </TouchableOpacity>

      {/* Profile Overlay Component (Opens as a Modal) */}
      <Profileoverlay isVisible={profileVisible} onClose={() => setProfileVisible(false)} />

      {/* Periodic Table Title */}
      <Text style={styles.title}>Periodic Table</Text>

      {/* Periodic Table */}
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        <View style={styles.table}>
          {elements.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((el, colIndex) =>
                el ? (
                  <TouchableOpacity
                    key={colIndex}
                    style={[styles.elementBox, { backgroundColor: el.color }]}
                    onPress={() => {
                      if (el.name !== "Lanthanides" && el.name !== "Actinides") {
                        navigation.navigate('ElementDetailScreen', { element: el });
                      }
                    }}                  >
                    <Text style={styles.symbol}>{el.symbol}</Text>
                    <Text style={styles.number}>{el.number}</Text>
                    <Text style={styles.name}>{el.name}</Text>
                  </TouchableOpacity>
                ) : (
                  <View key={colIndex} style={styles.emptyBox} />
                )
              )}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* f-Block Elements positioned below Period 7 with spacing */}
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        <View style={styles.fBlockContainer}>
          {fBlockElements.map((row, rowIndex) => (
            <View key={rowIndex} style={[styles.row, styles.fBlockRow]}>
              {row.map((el, colIndex) => (
                <TouchableOpacity
                key={colIndex}
                style={[styles.elementBox, { backgroundColor: el.color }]}
                onPress={() => navigation.navigate("ElementDetailScreen", { element: el })}
              >
                <Text style={styles.symbol}>{el.symbol}</Text>
                <Text style={styles.number}>{el.number}</Text>
                <Text style={styles.name}>{el.name}</Text>
              </TouchableOpacity>
              
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.bottomNav}>
      <TouchableOpacity 
        onPress={() => handleNavigation('Home')} 
        style={[styles.navButton, activeScreen === 'Home' && styles.activeNav]}
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
  container: { flex: 1, paddingTop: 50, backgroundColor: "#71E1FF", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 5 },
  logoButton: { position: "absolute", top: 10, left: 10, padding: 5 },
  categoryIndex: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  categoryItem: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  categoryText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  tablePlaceholder: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  table: { flexDirection: "column", width: "auto" },
  row: { flexDirection: "row" },
  fBlockContainer: { marginTop: 0 },
  fBlockRow: { flexDirection: "row" },
  elementBox: { width: 75, height: 75, justifyContent: "center", alignItems: "center", margin: 2, borderRadius: 5 },
  emptyBox: { width: 75, height: 75, margin: 2 },
  symbol: { fontSize: 15, fontWeight: "bold", color: "#fff" },
  number: { fontSize: 12, color: "#fff" },
  name: { fontSize: 10, color: "#fff", marginTop: 2, fontWeight: "bold"},
  scrollContainer: { justifyContent: "flex-start" },
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

export default PeriodicTableScreen;
