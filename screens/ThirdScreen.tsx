import { Text, Image, StyleSheet, View, TouchableOpacity, TextInput, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import React, { useState } from 'react';
export default function ThirdScreen({ navigation }) {
  const [isPasswordVisible, setPasswordVisible] = useState(false); // State để điều khiển hiển thị mật khẩu
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible); // Đổi trạng thái khi nhấn vào biểu tượng 'eye'
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/images/banner.png')} style={{ width: '100%' }} />
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.boldtext}>Email</Text>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/mail.png')} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your user email"
          keyboardType='email-address'
        />
      </View>
      <Text style={styles.boldtext}>Password</Text>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/lock.png')} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your user password"
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={{ marginLeft: 15 }} >
          <Image source={require('../assets/images/eye.png')} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.colored_button}
        onPress={() => navigation.navigate("Forth Screen")}
      >Login</TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    gap: 10,
  },
  title: {
    color: 'green',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  boldtext:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  images: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  green_button: {
    backgroundColor: 'green',
    borderRadius: 10,
    color: 'white',
    textAlign: 'center',
    padding: 20,
  }, inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    height: 50,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    height: 40
  },
  inputIcon: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  }, colored_button: {
    marginTop: 30,
    backgroundColor: "aqua",
    borderRadius: 10,
    color: "white",
    textAlign: "center",
    padding: 20,
    width: '100%'
  },
});