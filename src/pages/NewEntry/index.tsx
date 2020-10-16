import React from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import BalanceLabel from '../../components/BalanceLabel';

export default function NewEntry({currentBalance}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalance}/>
      <View>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
        <Button title='GPS' onPress={()=>navigation.navigate('Report')}/>
        <Button title='Camera' onPress={()=>{}}/>
      </View>
      <View>
        <Button title='Adicionar' onPress={()=>{}}/>
        <Button title='Cancelar' onPress={()=>navigation.navigate('Main')}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  //  flex: 1,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1
  }
})