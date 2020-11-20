import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';
import Colors from '../../styles/colors';

export default function BalancePanel() {
  const navigation = useNavigation();

  const newItem = {
    id: null,
    amount: 0,
    category: {id: null, name: 'Selecione', isInit: false},
    entryAt: new Date(),
  }
   return (
     <View style={styles.container}>
      <LinearGradient
        colors={[Colors.violet, Colors.blue]}
        style={styles.panel}>
        <BalancePanelLabel /> 
        <BalancePanelChart />
      </LinearGradient>
      <TouchableOpacity 
        style={styles.button}
        onPress={()=>navigation.navigate('NewEntry', {entry: newItem})}  
      >
       <Icon name="add" size={30} color={Colors.white}></Icon>
      </TouchableOpacity>
     </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  panel: {
    paddingVertical: 10,   
  },
  button: {
    backgroundColor: Colors.green,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    width:50,
    height:50,
    borderRadius:25,
    shadowColor: Colors.black,
    elevation: 5,
    marginTop: -25,
    marginRight: 10
  },
  textButton: {
    color: Colors.white,
    fontSize: 30
  }

})