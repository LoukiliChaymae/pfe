import { StyleSheet, Text, View, TouchableOpacity ,Image,SafeAreaView} from 'react-native';
import Modal from 'react-native-modal';
import React, { useState } from 'react';
import  Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MultiSelect from 'react-native-multiple-select';
export default function AddGroup(props) {
    const handlePress = props.handlePress;
    const items = [{
      id: '92iijs7yta',
      name: 'Ondo'
    }, {
      id: 'a0s0a8ssbsd',
      name: 'Ogun'
    }, {
      id: '16hbajsabsd',
      name: 'Calabar'
    }, {
      id: 'nahs75a5sg',
      name: 'Lagos'
    }, {
      id: '667atsas',
      name: 'Maiduguri'
    }, {
      id: 'hsyasajs',
      name: 'Anambra'
    }, {
      id: 'djsjudksjd',
      name: 'Benue'
    }, {
      id: 'sdhyaysdj',
      name: 'Kaduna'
    }, {
      id: 'suudydjsjd',
      name: 'Abuja'
      }
  
  ];
  const [selectedItems, setSelectedItems] = useState(false);
  const onSelectedItemsChange = (selectedItems) => {
    setSelectedItems(!selectedItems);
  };

    return(
        
      <SafeAreaView>
            
        <Modal transparent isVisible={true}>
            
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.colsebutton} onPress={handlePress}>
            <Fontisto name='close-a'></Fontisto>
          </TouchableOpacity>
    <View style={{flexDirection:'row',gap:-28, alignItems:'flex-end', justifyContent:'center'}}>     
      <View style={styles.circle}>
        <Image
          source={require('../assets/group.png')}
          style={styles.image}
        />
     
      
    </View>
    <TouchableOpacity style={styles.addButton}>
    <MaterialIcons style={styles.addButtonIcon} name='add'></MaterialIcons>
      </TouchableOpacity>
            
      </View>
      <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          // onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Pick Items"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={ (text)=> console.log(text)}
          altFontFamily="ProximaNova-Light"
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="#CCC"
          submitButtonText="Submit"
        />
          </View>
          
        </Modal>
      </SafeAreaView>
    );
 }
const styles = StyleSheet.create({
    modalContainer: {
        flex:1,
        backgroundColor:'white',
        padding:10,
        marginHorizontal:20,
        marginVertical:90,
        borderRadius:10,
      },
      colsebutton:{
        position:'absolute',
        right:20,
        top:10,
        zIndex:1,
      },
      circle: {
        width: 100,
        height: 100,
        borderRadius: 100,
        overflow: 'hidden',
        borderWidth: 2,
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
      addButton: {
        width: 25,
        height: 25,
        borderRadius: 20,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 3,
      },
      addButtonIcon: {
        fontSize:21,
        fontWeight:'bold',
        color: 'white',
      },
});

 