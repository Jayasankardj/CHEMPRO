import 'react-native-reanimated';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import Loginscreen from "./screens/Loginscreen";
import Signup from "./screens/Signup";
import PeriodicTableScreen from "./screens/PeriodicTableScreen";
import Profileoverlay from './screens/Profileoverlay';
import ProfileScreen from "./screens/ProfileScreen";
import MolarMassScreen from "./screens/MolarMassScreen";
import Calculation from "./screens/Calculation";
import QuizHomeScreen from "./screens/QuizHomeScreen";
import ElementDetailScreen from "./screens/ElementDetailScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ChangePasswordScreen from "./screens/ChangePasswordScreen";
import PrivacyPolicyScreen from "./screens/PrivacyPolicyScreen";
import DeleteScreen from "./screens/DeleteScreen";
import QuizScreen from "./screens/QuizScreen";
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Loginscreen" 
          component={Loginscreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Signup" 
          component={Signup} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="PeriodicTableScreen" 
          component={PeriodicTableScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Profileoverlay" 
          component={Profileoverlay} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ProfileScreen" 
          component={ProfileScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="MolarMassScreen" 
          component={MolarMassScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Calculation" 
          component={Calculation} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="QuizHomeScreen" 
          component={QuizHomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="QuizScreen"
          component={QuizScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ElementDetailScreen" 
          component={ElementDetailScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="SettingsScreen" 
          component={SettingsScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ChangePasswordScreen" 
          component={ChangePasswordScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="PrivacyPolicyScreen" 
          component={PrivacyPolicyScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="DeleteScreen"
          component={DeleteScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
