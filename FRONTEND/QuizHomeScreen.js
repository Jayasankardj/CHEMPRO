import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Profileoverlay from "./Profileoverlay";
import React, { useState } from 'react';

const QuizHomeScreen = () => {
    const [profileVisible, setProfileVisible] = useState(false);
    const navigation = useNavigation();
    const [activeScreen, setActiveScreen] = useState('QuizHomeScreen');
    
    const handleNavigation = (screen) => {
        setActiveScreen(screen);
        navigation.navigate(screen);
    };

    return (
        <View style={styles.container}>
            {/* Profile Icon */}
            <TouchableOpacity style={styles.profileIcon} onPress={() => setProfileVisible(true)}>
                <Icon name="user-circle" size={40} color="#000" />
            </TouchableOpacity>
    
        <Profileoverlay isVisible={profileVisible} onClose={() => setProfileVisible(false)} />

            {/* Quiz Title */}
            <Image source={require('./assets/Quiz.png')} style={styles.quizImage} />

            {/* Quiz Description */}
            <Text style={styles.title}>Test Your Knowledge!</Text>
            <Text style={styles.subtitle}>
                “Interactive quizzes to challenge your mind and sharpen your skills.”
            </Text>

            {/* Start Button */}
            <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('QuizScreen')}>
                <Text style={styles.startText}>Start</Text>
            </TouchableOpacity>

            {/* Bottom Navigation */}
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
        backgroundColor: '#80D0FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileIcon: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    quizImage: {
        marginTop: 10,
        width: 350,
        height: 200,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 30,
    },
    subtitle: {
        fontSize: 20,
        textAlign: 'center',
        marginHorizontal: 30,
        marginVertical: 10,
        marginBottom: 40,
        fontStyle: 'italic',
    },
    startButton: {
        backgroundColor: 'blue',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 30,
        marginTop: 20,
    },
    startText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
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

export default QuizHomeScreen;
