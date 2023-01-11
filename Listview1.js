// import React from 'react';
// import { SectionList, StyleSheet, Text, View } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22
//   },
//   sectionHeader: {
//     paddingTop: 2,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 2,
//     fontSize: 14,
//     fontWeight: 'bold',
//     backgroundColor: 'rgba(247,247,247,1.0)',
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })

// const SectionListBasics = () => {
//     return (
//       <View style={styles.container}>
//         <SectionList
//           sections={[
//             {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
//             {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
//           ]}
//           renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//           renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
//           keyExtractor={(item, index) => `basicListEntry-${item.title}`}
//         />
//       </View>
//     );
// }

// export default SectionListBasics;




import React from "react";
import { SectionList,StyleSheet,Text,View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop:22
    },
    sectionHeader: {
        padddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,257,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height:44,
    },
})

const SectionListBasics = () => {
    return (
        <View style={styles.container}>
            <SectionList
            sections={[
                {title:'A',data:['Andhra pradesh','Arunachal pradesh','Assam']},
                {title:'b',data:['Bihar']},
                {title:'c',data:['Chhatttisgarh']},
                {title:'G',data:['Goa','Gujarat']},
                {title:'H',data:['Haryana','Himachal pradesh']},
                {title:'j',data:['Jharkhand']},
                {title:'K',data:['Karnataka','Kerala']},
                {title:'M',data:['Madhya pradesh','Maharashtra','Manipur','Meghalaya','Mizoram']},
                {title:'N',data:['Nagaland']},
                {title:'O',data:['Odisha']},
                {title:'P',data:['Punjab']},
                {title:'R',data:['Rajastan']},
                {title:'S',data:['Sikkim']},
                {title:'T',data:['Tamil Nadu','Telangana','Tripura']},
                {title:'U',data:['Uttarakhand','Uttar pradesh']},
                {title:'W',data:['West Bengal']},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item,index) => `basicListEntry-${item.title}`}
            />
        </View>
    );
}
export default SectionListBasics;