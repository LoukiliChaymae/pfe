import { StyleSheet ,FlatList, Text, View, TouchableOpacity} from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Card from './groupeCard.js';
import AddGroup from './popupAddgroup.js';
import { useState } from 'react';
const GroupScreen = () => {
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f3',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-1455719d72',
          title: 'Third Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-5571e29d72',
          title: 'Third Item',
        }
      ];
      
      const [isViewVisible, setViewVisibility] = useState(false);
      const handlePress = () => {
        setViewVisibility(!isViewVisible);
      };
  return (
    <View  style={{ flex: 1 }}>
          <View style={styles.headerContainer}>
            <Icon style={styles.header} name="group"></Icon>
            <Text style={styles.header}>Groups</Text>
          </View>
          <FlatList
            data={DATA}
            renderItem={({group}) => <Card group={group} />}
            keyExtractor={item => item.id}
        />
          <TouchableOpacity
              style={styles.buttonAddgroup}
              onPress={handlePress}
          >
              <Text><MaterialIcons style={styles.addgroupicone} name="group-add"></MaterialIcons></Text>
          </TouchableOpacity>
            
        {isViewVisible && (
            <AddGroup handlePress={handlePress} />
          )}
        </View>
  )
}
const styles = StyleSheet.create({
    container: {
     // flex: 1,
      // marginTop: StatusBar.currentHeight || 0,
    },
    headerContainer:{
  
      paddingVertical:10,
      paddingHorizontal:20,
      height:60,
      flexDirection:'row', 
      alignItems:'center',
    },
    header:{
      color:'#212A37',
      fontSize:30,
      fontWeight:'bold',
    },
  
    item: {
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 10,
    },
    title: {
      fontSize: 32,
    },
    
    buttonAddgroup:{
      
      alignItems: 'center',
      justifyContent: 'center',
      width: 60,
      height: 60,
      position: 'absolute',
      bottom: 20,
      right: 20,
      backgroundColor: '#FF6238',
      borderRadius: 20,
    },
  
    addgroupicone:{
      color:'#212A37',
      fontSize:40,
      fontWeight:'bold',
      margin:10,
    },
  
    overlayVisible:{
      opacity:1,
    }
  });
  
  

export default GroupScreen