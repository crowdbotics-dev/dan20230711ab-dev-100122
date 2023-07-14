import { useSelector } from "react-redux";
import { api_v1_login_create } from "../../store/danabdevAPI/authTokens.slice.js";
import { useDispatch } from "react-redux";
import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

const LoginScreen = () => {
  const {
    entities: username
  } = useSelector(state => state.username);
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(api_v1_login_create({
      username: {
        username
      }
    }));
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#999" />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#999" secureTextEntry />
      </View>
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  },
  forgotPassword: {
    marginBottom: 20
  },
  forgotPasswordText: {
    color: "#007AFF",
    fontSize: 14,
    textDecorationLine: "underline"
  }
});
export default LoginScreen;