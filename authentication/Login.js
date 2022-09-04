import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const message = `Your email is: ${email} and Your password is: ${password}`;
  const handleButton = () => {
    if (password !== "1") {
      alert("Email or password is not correct !!");
    }
    if (password === "1") {
      alert(message)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Form</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity onPress={handleButton} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001f37",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: "black",
  },
  title: {
    color: "white",
    fontSize: 25,
    marginBottom: 20,
  },
  inputView: {
    backgroundColor: "white",
    borderRadius: 5,
    width: "70%",
    height: 40,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 9
    ,
  },

  loginBtn: {
    width: "30%",
    borderRadius: 20,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#00f61c",

  },

});

export default Login;