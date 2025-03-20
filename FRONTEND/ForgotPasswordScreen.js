import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // Step 1: Enter Email, Step 2: Enter OTP, Step 3: Reset Password
  const [generatedOtp, setGeneratedOtp] = useState('');

  // Function to generate a random OTP (for simulation)
  const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

  // Handle OTP request
  const handleGetOTP = () => {
    if (!email.includes('@') || !email.includes('.')) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const otpCode = generateOTP(); // Simulating OTP generation
      setGeneratedOtp(otpCode);
      setLoading(false);
      Alert.alert('OTP Sent', `Your OTP is: ${otpCode} (For testing)`);
      setStep(2); // Move to OTP entry step
    }, 2000);
  };

  // Handle OTP verification
  const handleVerifyOTP = () => {
    if (otp === generatedOtp) {
      Alert.alert('OTP Verified', 'Proceed to change your password.');
      setStep(3); // Move to password reset step
    } else {
      Alert.alert('Invalid OTP', 'Please enter the correct OTP.');
    }
  };

  // Handle password reset
  const handleResetPassword = () => {
    if (newPassword.length < 6) {
      Alert.alert('Weak Password', 'Password must be at least 6 characters long.');
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert('Password Mismatch', 'New password and confirm password must match.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Password Reset Successful', 'You can now log in with your new password.');
      navigation.navigate('LoginScreen'); // Navigate back to login
    }, 2000);
  };

  return (
    <LinearGradient colors={['#78C4D4', '#147B96']} style={styles.container}>
      
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={30} color="black" />
      </TouchableOpacity>

      {/* Forgot Password Title */}
      <Text style={styles.title}>Forgot Password?</Text>

      {step === 1 && (
        <>
          {/* Email Input */}
          <Text style={styles.label}>Enter Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#777"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          {/* Get OTP Button */}
          <TouchableOpacity style={styles.otpButton} onPress={handleGetOTP} disabled={loading}>
            {loading ? (
              <ActivityIndicator size="small" color="black" />
            ) : (
              <Text style={styles.otpText}>Get OTP</Text>
            )}
          </TouchableOpacity>
        </>
      )}

      {step === 2 && (
        <>
          {/* OTP Input */}
          <Text style={styles.label}>Enter OTP:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            placeholderTextColor="#777"
            keyboardType="numeric"
            maxLength={6}
            value={otp}
            onChangeText={setOtp}
          />

          {/* Verify OTP Button */}
          <TouchableOpacity style={styles.otpButton} onPress={handleVerifyOTP}>
            <Text style={styles.otpText}>Verify OTP</Text>
          </TouchableOpacity>
        </>
      )}

      {step === 3 && (
        <>
          {/* New Password Input */}
          <Text style={styles.label}>New Password:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter new password"
            placeholderTextColor="#777"
            secureTextEntry={true}
            value={newPassword}
            onChangeText={setNewPassword}
          />

          {/* Confirm Password Input */}
          <Text style={styles.label}>Confirm Password:</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm new password"
            placeholderTextColor="#777"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          {/* Reset Password Button */}
          <TouchableOpacity style={styles.otpButton} onPress={() => navigation.navigate("Loginscreen")} disabled={loading}>
            {loading ? (
              <ActivityIndicator size="small" color="black" />
            ) : (
              <Text style={styles.otpText}>Reset Password</Text>
            )}
          </TouchableOpacity>
        </>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 30,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 10,
  },
  input: {
    width: '90%',
    height: 45,
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginTop: 5,
  },
  otpButton: {
    backgroundColor: '#D3D3D3',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 30,
  },
  otpText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ForgotPasswordScreen;
