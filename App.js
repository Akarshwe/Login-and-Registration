import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';


const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Thrissur'},
          {key: 'Thiruvananthapuram'},
          {key: 'Palakkad'},
          {key: 'Kannur'},
          {key: 'Kozhikode'},
          {key: 'Kottayam'},
          {key: 'Kollam'},
          {key: 'Alappuzha'},
          {key: 'Ernakulam'},
          {key: 'Pathanamthitta'},
          {key: 'Wayanad'},
          {key: 'idukki'},
          {key: 'Malappuram'},
          {key: 'Kasaragod'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 30,
    height: 60,
  },
});

export default FlatListBasics;