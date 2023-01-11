// import * as React from 'react';
// import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function HomeScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Home Screen</Text>
//             <Button
//                 title="Go to Details"
//                 onPress={() => navigation.navigate('Details')}
//             />
//         </View>
//     );
// }

// function DetailsScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Details Screen</Text>
//             <Button
//                 title="Go to Details... again"
//                 onPress={() => navigation.push('Details')}
//             />
//             <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//             <Button title="Go back" onPress={() => navigation.goBack()} />
//         </View>
//     );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="Home">
//                 <Stack.Screen name="Home" component={HomeScreen} />
//                 <Stack.Screen name="Details" component={DetailsScreen} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

// export default App;


// -----------------------------------------------------------------------------------------------------


import React from "react";
import { StyleSheet, Image, TextInput, Text, View, TouchableOpacity,Button, TouchableWithoutFeedback, } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({ navigation }) {


    return (
        <View style={[styles.container]}>
            <View style={styles.mainview}>
                <View style={styles.logostyle} >
                    <Image style={styles.mlogoimage} source={require("./assets/vk.png")}></Image>
                </View>
                <View style={[styles.loginmain1, { flexDirection: 'row' }]} ><TextInput style={styles.input1} placeholder="   Email" ></TextInput></View>
                <View style={[styles.loginmain2, { flexDirection: 'row' }]} ><TextInput style={styles.input1} placeholder="   Password" ></TextInput></View>
                {/* <View ><TouchableOpacity activeOpacity={.5} style={styles.touchbtn2}><Text style={styles.Lbtn}>Log in</Text></TouchableOpacity></View> */}
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

function DetailsScreen({ navigation }) {


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
const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

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
    button:{
        alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    },
});

export default App;





// ---------------------------------------------------------------------------------------------------------------




// // In index.js of a new project
// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { Navigation } from 'react-native-navigation';

// // Home screen declaration
// const HomeScreen = (props) => {
//   return (
//     <View style={styles.root}>
//       <Text>Hello React Native Navigation 👋</Text>
//       <Button
//         title='Push Settings Screen'
//         color='#710ce3'
//         onPress={() => Navigation.push(props.componentId, {
//           component: {
//             name: 'Settings',
//             options: {
//               topBar: {
//                 title: {
//                   text: 'Settings'
//                 }
//               }
//             }
//           }
//         })}/>
//     </View>
//   );
// };
// HomeScreen.options = {
//   topBar: {
//     title: {
//       text: 'Home',
//       color: 'white'
//     },
//     background: {
//       color: '#4d089a'
//     }
//   }
// };

// // Settings screen declaration - this is the screen we'll be pushing into the stack
// const SettingsScreen = () => {
//   return (
//     <View style={styles.root}>
//       <Text>Settings Screen</Text>
//     </View>
//   );
// }

// Navigation.registerComponent('Home', () => HomeScreen);
// Navigation.registerComponent('Settings', () => SettingsScreen);

// Navigation.events().registerAppLaunchedListener(async () => {
//   Navigation.setRoot({
//     root: {
//       stack: {
//         children: [
//           {
//             component: {
//               name: 'Home'
//             }
//           }
//         ]
//       }
//     }
//   });
// });

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'whitesmoke'
//   }
// });