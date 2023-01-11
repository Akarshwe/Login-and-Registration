import React,{ useState } from "react";
import{View,Text,Image,FlatList,StyleSheet} from 'react-native'

const CustomFlatlist2 = () => {

    const [product, setproduct] = useState([
        {
            id:'1',
            title:'Headset',
            description:'₹1,740',
            rate:'₹5800',
            offer:'70% off',
            image:require('./assets/product1.jpeg')

        },
        {
            id:'2',
            title:'watch',
            description:'₹2,999',
            rate:'₹5990',
            offer:'49% off',
            image:require('./assets/product2.jpeg')
        
        },
        {
            id:'3',
            title:'Bodywash',
            description:'₹750',
            rate:'₹1062',
            offer:'29% off',
            image:require('./assets/product3.jpeg')

        },
        {
            id:'4',
            title:'Boost',
            description:'₹575',
            rate:'₹600',
            offer:'4% off',
            image:require('./assets/product4.jpeg')

        
        },
        {
            id:'5',
            title:'Lipstick',
            description:'₹4999',
            rate:'₹6498',
            offer:'23% off',
            image: require('./assets/product5.webp'),

        },
        {
            id:'6',
            title:'spectacle',
            description:'₹3399',
            rate:'₹5990',
            offer:'43% off',
            image:require('./assets/product6.jpeg')


        },


    ])

    return(
        <FlatList
        data={product}
        numColumns={2}
        renderItem={({item,index})=>{
        return(
            <View style={styles.containers}>
                <View style={styles.photos}>
                <Image source={item.image} style={styles.photo} />
                </View>
                <View style={styles.containers_text}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <Text style={styles.rate}>{item.rate}</Text>
                    <Text style={styles.offer}>{item.offer}</Text>
                </View>
            </View>
        )
        }}
        />
    )
}

export default CustomFlatlist2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems:'center'
    },
    containers: {
        padding: 10,
        marginLeft: 16,
        marginRight: 5,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 7,
        backgroundColor: '#dcdcdc',
        elevation: 2,
        height:270,
        width:170,
        borderWidth:1,
    },
    title: {
        fontSize: 18,
        color: 'black',
    },
    containers_text: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop:12,
        alignItems:'center',
    },
    description: {
        fontSize: 16,
        // fontStyle: 'italic',
        color: 'black',
        marginTop:7,
    },
    photo: {
        height: 120,
        width: 120,
        marginTop: 10,
        borderWidth:1,
        borderColor:'black',
    },
    offer: {
        fontSize: 20,
        // fontStyle: 'italic',
        color: 'black',
        // marginTop:7,
        color:'green',
        //textDecorationLine: 'line-through',
    },
    rate: {
        fontSize: 15,
        // fontStyle: 'italic',
        color: 'black',
        // marginTop:7,
        textDecorationLine: 'line-through'
    },
    photos:{
        alignItems:'center',
    }
});