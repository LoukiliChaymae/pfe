import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet,SafeAreaView,FlatList, Text, View, Modal, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Card from './components/groupeCard.js';
import AddGroup from './components/popupAddgroup.js';
export default function App() {
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
    },
    {
      id: '58694a0f-3d-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0fda1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  const [isViewVisible, setViewVisibility] = useState(false);
  const handlePress = () => {
    setViewVisibility(!isViewVisible);
  };
  
  return (
    <SafeAreaView style={[styles.container, isViewVisible && styles.overlayVisible]}>
      <View style={styles.headerContainer}>
        <Icon style={styles.header} name="group"></Icon>
        <Text style={styles.header}>Groups</Text></View>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor:'#FBF9F7',
    
    
  },
  headerContainer:{
    flexDirection:'row', 
    alignItems:'center'
  },
  header:{
    color:'#212A37',
    fontSize:30,
    fontWeight:'bold',
    margin:10,
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
    borderWidth: 1,
    borderColor: '#FF6238',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 10,
    right: 20,
    height: 70,
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

