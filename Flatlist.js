import React, { useState } from 'react'
import { View, Text, Image, FlatList ,StyleSheet} from 'react-native'

const Flatlist = () => {

    const [people, setpeople] = useState([
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
        {
            id: '6',
            title: ' VV',
            description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:'
        },
    ])


  return (
    <FlatList
        data={people}
        renderItem={({item,index})=>{
            return (
                <View style={styles.containers} >
                    <Image source={require("./assets/dp1.jpeg")} style={styles.photo} />
                    <View style={styles.container_text}>
                        <Text style={styles.title}>{item.title}
                        </Text>
                        <Text style={styles.description}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
                        </Text>
                    </View>
                </View>
            )
        }}
    />
    
  )
}

export default Flatlist

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