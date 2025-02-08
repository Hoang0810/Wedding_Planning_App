import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

function SignIn_Page() {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome back!</Text>
            <Text style={styles.instructionText}>Please, sign in to continue.</Text>

            <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#aaa"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#aaa"
                secureTextEntry
            />

            <View style={styles.rememberMeContainer}>
                <TouchableOpacity>
                    <Text style={styles.rememberMeText}>Remember me</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.signInButton}>
                <Text style={styles.signInButtonText}>Sign In</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>Or sign in with</Text>
            <View style={styles.socialButtonsContainer}>
                <TouchableOpacity style={styles.socialButton}>
                    <Text style={styles.socialButtonText}>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <Text style={styles.socialButtonText}>Apple</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.signUpPrompt}>
                Don't have an account? <Text style={styles.signUpText}>Sign up</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    instructionText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    rememberMeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    rememberMeText: {
        color: '#000',
    },
    forgotPasswordText: {
        color: '#000',
    },
    signInButton: {
        backgroundColor: '#000',
        paddingVertical: 15,
        borderRadius: 5,
        marginBottom: 20,
    },
    signInButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    orText: {
        textAlign: 'center',
        marginBottom: 10,
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    socialButton: {
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    socialButtonText: {
        color: '#000',
    },
    signUpPrompt: {
        textAlign: 'center',
    },
    signUpText: {
        color: '#000',
        fontWeight: 'bold',
    },
});

export default SignIn_Page;