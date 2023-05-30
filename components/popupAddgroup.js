import { StyleSheet, Text, View, TouchableOpacity ,Image,SafeAreaView} from 'react-native';
import Modal from 'react-native-modal';
import React, { useState } from 'react';
import  Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import SelectBox from 'react-native-multi-selectbox'
 import { xorBy } from 'lodash'
import { TextInput } from 'react-native-paper';

const K_OPTIONS = [
  {
    item: 'Juventus',
    id: 'JUVE',
  },
  {
    item: 'Real Madrid',
    id: 'RM',
  },
  {
    item: 'Barcelona',
    id: 'BR',
  },
  {
    item: 'PSG',
    id: 'PSG',
  },
  {
    item: 'FC Bayern Munich',
    id: 'FBM',
  },
  {
    item: 'Manchester United FC',
    id: 'MUN',
  },
  {
    item: 'Manchester City FC',
    id: 'MCI',
  },
  {
    item: 'Everton FC',
    id: 'EVE',
  },
  {
    item: 'Tottenham Hotspur FC',
    id: 'TOT',
  },
  {
    item: 'Chelsea FC',
    id: 'CHE',
  },
  {
    item: 'Liverpool FC',
    id: 'LIV',
  },
  {
    item: 'Arsenal FC',
    id: 'ARS',
  },

  {
    item: 'Leicester City FC',
    id: 'LEI',
  },
]


export default function AddGroup(props) {
    const handlePress = props.handlePress;

    const [selectedTeams, setSelectedTeams] = useState([])

    function onMultiChange() {
      return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
    }

// function onChange() {
//       return (val) => setSelectedTeam(val)
//     }
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
      <TextInput  style={{marginVertical:10, }} label="Group Name" />
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>Select Demo</Text>
      <SelectBox
        label="Select memebers"
        options={K_OPTIONS}
        selectedValues={selectedTeams}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
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

 