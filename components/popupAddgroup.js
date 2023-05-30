import { StyleSheet, Text, View, TouchableOpacity ,SafeAreaView} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AddGroup(props) {
    const handlePress = props.handlePress;
    return(
        
        <SafeAreaView>
        <Modal transparent isVisible={true}>
          <View style={styles.modalContainer}>
            <Text>I am the modal content!</Text>
            <TouchableOpacity
          
          onPress={handlePress}
      >
          <Text>hide</Text>
      </TouchableOpacity>
          </View>
        </Modal>
      </SafeAreaView>
    );
 }
const styles = StyleSheet.create({
    modalContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        padding:40,
        marginHorizontal:20,
        marginVertical:90,
        borderRadius:10,
      }
});

 