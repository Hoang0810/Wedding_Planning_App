import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

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
                    <Image source={require('../Assets/Images/gg_btn.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <Image source={require('../Assets/Images/apple_btn.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <Image source={require('../Assets/Images/fb_btn.png')} />
                </TouchableOpacity>
            </View>
            <Text style={styles.signUpText}>Continute as a Guest</Text>
            <Text style={styles.signUpPrompt}>
                
                Don't have an account? <Text style={styles.signUpText}>Sign up</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'Start',
    },
    instructionText: {
        fontSize: 16,
        textAlign: 'Start',
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 8,
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
        borderColor: '#ccc',
        borderRadius: 5,
    },
    socialButtonText: {
        color: '#000',
    },
    signUpPrompt: {
        textAlign: 'start',
    },
    signUpText: {
        color: '#BABABA',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
});

export default SignIn_Page;