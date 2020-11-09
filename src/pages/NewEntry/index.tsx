import React, {useState} from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';

import BalanceLabel from '../../components/BalanceLabel';
import NewEntryInput from './NewEntryInput'

import {saveEntry, deleteEntry} from '../../services/Entries';
import Colors from '../../styles/colors';

export default function NewEntry({currentBalance}) {
  const navigation = useNavigation();
  const route = useRoute()
  const  entry = route.params['entry']
  const [amount, setAmount] = useState(`${entry.amount}`)

  const isValid = () => {
    if (parseFloat(amount) !== 0) {
      return true;
    }
    return false;
  }

  const save =() => {
    const value = {
      amount:parseFloat(amount)
    }
    saveEntry(value, entry);
    goBack();
  }

  const remove = () => {
    deleteEntry(entry)
    goBack();
  }

  const goBack= () =>{
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <BalanceLabel/>
      <View>
        <NewEntryInput
          value={amount}
          onChangeValue={setAmount}
        />
        <TextInput 
          style={styles.input}
          
          />
        <Button title='GPS' onPress={()=>navigation.navigate('Report')}/>
        <Button title='Camera' onPress={()=>{}}/>
      </View>
      <View>
        <Button 
          title='Adicionar' 
          onPress={() =>{
            isValid() && save()}
          }/>
        <Button title='Excluir' onPress={remove}/>
        <Button title='Cancelar' onPress={()=>goBack()}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: Colors.background,
  padding: 10
  },
  input: {
    borderColor: '#000',
    borderWidth: 1
  }
})