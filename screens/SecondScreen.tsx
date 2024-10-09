import { Text, Image, StyleSheet, View, TouchableOpacity, TextInput, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';


export default function SecondScreen({ navigation }) {
  const [isPasswordVisible, setPasswordVisible] = useState(false); // State để điều khiển hiển thị mật khẩu
  const [isHadRead, setHadRead] = useState(false);
  const toggleHadRead = () => {
    setHadRead(!isHadRead); // Đổi trạng thái khi nhấn vào biểu tượng 'eye'
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible); // Đổi trạng thái khi nhấn vào biểu tượng 'eye'
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/*TouchOpa with image require ../assets/images/arrow.png */}
      <TouchableOpacity style={styles.flex_left} onPress={() => navigation.navigate("First Screen")}>
        <Image source={require('../assets/images/arrow.png')} style={{ width: 25, height: 25 }} />
      </TouchableOpacity>
      {/*App logo, then Nice to see you!, then Create your account */}
      <Image source={require('../assets/images/app_logo.png')} style={{ width: 150, height: 150 }} />
      <Text style={styles.title}>Nice to see you!</Text>
      <Text>Create your account</Text>
      {/*A form with placeholder a input Enter your user name, a input Enter your email address, a input Enter your password with image eye to show or hide password inside input*/}
      <View style={{ flexDirection: 'column', marginBottom: 20, width:"100%", gap: 10 }}>
          {/* Username Input */}
          <View style={styles.inputContainer}>
            <Image source={require('../assets/images/codicon_account.png')} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your user name"
            />
          </View>
          <View style={styles.inputContainer}>
            <Image source={require('../assets/images/mail.png')} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your user email"
              keyboardType='email-address'
            />
          </View>
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
        </View>
      {/*Checkbox I agree with | Terms & Conditions aqua*/}
      <View style={{ flexDirection: 'row', gap: 20, backgroundColor: 'white' }}>
        <Checkbox onChange={toggleHadRead} value = {isHadRead}/>
        <Text>I agree with </Text>
        <Text style={{ color: 'aqua' }}>Terms & Conditions</Text>
      </View>
      <TouchableOpacity
        style={styles.colored_button}
        onPress={() => navigation.navigate("First Screen")}
      >Continue</TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    padding: 20,
    height: "auto",
    width: "auto",
    gap: 10,
  },
  title: {
    color: 'green',
    fontSize: 30,
    fontWeight: 'bold',
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
  },
  flex_left: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    width: '100%'
  },
  inputContainer: {
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
    backgroundColor: "aqua",
    borderRadius: 10,
    color: "white",
    textAlign: "center",
    padding: 20,
    width: '100%'
  },
});