import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

export default function BalancePanel({currentBalance}) {
  const navigation = useNavigation();
   return (
    <View style={styles.container}>
      <BalancePanelLabel currentBalance={currentBalance} /> 
      <BalancePanelChart />
      <Button onPress={()=>navigation.navigate('NewEntry')}  title="Adicionar"></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
   // flex: 1,
   marginTop: 5,
   paddingHorizontal: 5,
   borderWidth: 2,
   borderColor: '#000',
   borderRadius: 10,
   backgroundColor: '#bdc3c7',
   height: '30%',
   justifyContent: 'space-between'
  }
})