import React from "react";
import { StyleSheet, Image,  Text, View, TouchableOpacity, } from "react-native";

export default function App() {


    return (
        <View style={[styles.containers]}>
            <View style={styles.mainviews}>
                <View style={styles.logostyles} >
                    <Image style={styles.mlogoimages} source={require("./assets/student.png")}></Image>
                </View>
                <Text style={styles.innerText}> Welcome Alucard</Text>
                <Text style={styles.outerText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia deserunt mollit anim id est laborum.
</Text>


            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containers: {
        flex: 1,
        backgroundColor:'#1e90ff',
    },
    mlogoimages:{
        height:150,
        width:150,
        alignSelf:'center',
        marginTop:50,
    },
    innerText:{
        alignSelf:'center',
        fontSize:35,
        color:'white',
    },
    outerText:{
        alignSelf:'center',
        fontSize:20,
        marginTop:20,
        color:'white',
        marginLeft:40,
        marginRight:30,
    },
});
