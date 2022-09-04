import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";

function Register() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const message = `Your Email is: ${email} and Password is: ${password}`;

    const handleRegisterForm = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(email) === false) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
        if (password !== confirmPassword) {
            alert("Wrong Password !")
        }
        if (reg.test(email) === true && password === confirmPassword) {
            alert(message);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register Form</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email..."
                    placeholderTextColor="#444e59"
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View>
                {emailError ? <Text style={styles.errorText}>Email format is not correct !</Text> : <Text></Text>}
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password..."
                    placeholderTextColor="#444e59"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Confirm Password..."
                    placeholderTextColor="#444e59"
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                />
            </View>

            <TouchableOpacity onPress={handleRegisterForm} style={styles.registerBtn}>
                <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#8ccdff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        marginBottom: 20,
        fontSize: 27,
        color: "white",

    },
    inputView: {
        backgroundColor: "#fffefe",
        borderRadius: 5,
        width: "70%",
        height: 40,
        marginBottom: 20,

        // alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    registerBtn: {
        width: "30%",
        borderRadius: 10,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#000cf9",
    },
    registerText: {
        color: "white"
    },
    errorText: {
        color: "red",
        marginBottom: 17,
        fontSize: 15,
    }
});

export default Register;