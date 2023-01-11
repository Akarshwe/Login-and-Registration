import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';


const DATA = [people, setpeople] = useState
[
    {
        id: '1',
        title: 'David',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:'
    },
    {
        id: '2',
        title: 'Alex',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:'
    },
    {
        id: '3',
        title: 'Joy',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:'
    },
    {
        id: '4',
        title: ' Lisa',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:'
    },
    {
        id: '5',
        title: ' Jordy',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:'
    },
  ];
  
const CustomRow = ({ title, description, }) => (
    <View style={styles.container}>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        
      />
        <View style={styles.containers} >
            <Image source={require("./assets/dp1.jpeg")} style={styles.photo} />
            <View style={styles.container_text}>
                <Text style={styles.title}>David
                    {title}
                </Text>
                <Text style={styles.description}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:


                    {description}
                </Text>
            </View>
        </View>

        {/* <View style={styles.containers} >
            <Image source={require("./assets/dp2.jpeg")} style={styles.photo} />
            <View style={styles.container_text}>
                <Text style={styles.title}>
                    Alex
                    {title}
                </Text>
                <Text style={styles.description}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:


                    {description}
                </Text>
            </View>
        </View>

        <View style={styles.containers} >
            <Image source={require("./assets/dp4.jpeg")} style={styles.photo} />
            <View style={styles.container_text}>
                <Text style={styles.title}>
                    Joy
                    {title}
                </Text>
                <Text style={styles.description}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:


                    {description}
                </Text>
            </View>
        </View>

        <View style={styles.containers} >
            <Image source={require("./assets/dp5.webp")} style={styles.photo} />
            <View style={styles.container_text}>
                <Text style={styles.title}>
                    Lisa
                    {title}
                </Text>
                <Text style={styles.description}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:


                    {description}
                </Text>
            </View>
        </View>

        <View style={styles.containers} >
            <Image source={require("./assets/dp3.jpeg")} style={styles.photo} />
            <View style={styles.container_text}>
                <Text style={styles.title}>
                    Jordy
                    {title}
                </Text>
                <Text style={styles.description}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with


                    {description}
                </Text>
            </View>
        </View> */}


    </View>



);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    containers: {
        padding: 10,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 7,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    containers_text: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 30,
        justifyContent: 'center',
    },
    description: {
        fontSize: 8,
        fontStyle: 'italic',
        color: 'black',
        marginRight: 90,
    },
    photo: {
        height: 50,
        width: 50,
        marginRight: 10,
        marginTop: 10,
    },
});
export default CustomRow;