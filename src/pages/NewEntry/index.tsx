import React, {useState} from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';

import BalanceLabel from '../../components/BalanceLabel';
import {saveEntry} from '../../services/Entries';

export default function NewEntry({currentBalance}) {
  const navigation = useNavigation();
  const route = useRoute()
  const  entry = route.params['entry']
  const [amount, setAmount] = useState(`${entry.amount}`)

  const save =() => {
    const value = {
      amount:parseFloat(amount)
    }
    saveEntry(value, entry);
  }

  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalance}/>
      <View>
        <TextInput 
          style={styles.input}
          onChangeText={(text)=> setAmount(text)}
          value={amount}
        />
        <TextInput 
          style={styles.input}
          
          />
        <Button title='GPS' onPress={()=>navigation.navigate('Report')}/>
        <Button title='Camera' onPress={()=>{}}/>
      </View>
      <View>
        <Button title='Adicionar' onPress={save}/>
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