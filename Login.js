import React from "react";
import { StyleSheet, Image,  Text, View,TextInput,Button, TouchableOpacity, } from "react-native";

export default function App() {


    return (
        <View style={[styles.container]}>
        <View style={styles.mainview}>
            <View style={styles.logostyle} >
                <Image style={styles.mlogoimage} source={require("./assets/vk.png")}></Image>
            </View>
            <View style={[styles.loginmain1, { flexDirection: 'row' }]} ><TextInput style={styles.input1} placeholder="   Email" ></TextInput></View>
            <View style={[styles.loginmain2, { flexDirection: 'row' }]} ><TextInput style={styles.input1} placeholder="   Password" ></TextInput></View>

            <Button 
            color="#1e90ff"

            title="Log in"
            onPress={() => navigation.navigate('Details')}
        ></Button>
            <View ><TouchableOpacity activeOpacity={.6} style={styles.touchbtn1}><Text style={styles.fbtn}>Forgot password?</Text></TouchableOpacity></View>


        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input1: {
        fontSize: 19,
        marginBottom: 5,
    },
    fbtn: {
        fontSize: 15,
        textAlign: 'center',
        color: '#808080',
        marginBottom: 30
    },
    Lbtn: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',

    },
    touchbtn2: {
        borderWidth: 2,
        borderColor: '#1e90ff',
        borderRadius: 30,
        width: "100%",
        height: 50,
        backgroundColor: '#1e90ff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    touchbtn1: {
        marginTop: 30,
    },
    Logtext: {
        textAlign: "center",
        fontSize: 50,
        color: 'black',
        marginBottom: 10,
        marginTop: 60,
    },
    loginmain1: {
        backgroundColor: "#fff",
        borderRadius: 30,
        width: "100%",
        height: 60,
        borderWidth: 2,
        marginBottom: 20,
        borderColor: "#ccc",
        alignItems: "center",
        marginTop: 100,
    },
    loginmain2: {
        backgroundColor: "#fff",
        borderRadius: 30,
        width: "100%",
        height: 60,
        borderWidth: 2,
        marginBottom: 20,
        borderColor: "#ccc",
        alignItems: "center",
    },
    ortext: {
        marginTop: 30,
        color: "black",
    },
    mainlogo: {
        height: 45,
        marginLeft: 15,
    },

    mlogoimage: {
        height: 100,
        width: 100,
        marginTop: 100,
    },
    logostyle: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainview: {
        paddingHorizontal: 20,
    },
});
