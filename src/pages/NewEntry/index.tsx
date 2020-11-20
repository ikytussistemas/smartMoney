import React, {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';

import BalanceLabel from '../../components/BalanceLabel';
import NewEntryInput from './NewEntryInput';
import NewEntryCategoryPicker from './NewEntryCategoryPicker';
import NewEntryDatePicker from './NewEntryDatePicker';

import {saveEntry, deleteEntry} from '../../services/Entries';
import Colors from '../../styles/colors';

export default function NewEntry({currentBalance}) {
  const navigation = useNavigation();
  const route = useRoute();
  const  entry = route.params['entry'];
  const [amount, setAmount] = useState(`${entry.amount}`);
  const [debit, setDebit] = useState(entry.amount <= 0 ? -1 : 1);
  const [category, setCategory] = useState(entry.category);
  const [entryAt, setEntryAt ] = useState(entry.entryAt);

  const isValid = () => {
    if (parseFloat(amount) !== 0) {
      return true;
    }
    return false;
  }

  const save =() => {
    const value = {
      amount:parseFloat(amount),
      category: category,
      entryAt: entryAt
    }
    console.log(`entry:: ${JSON.stringify(entry)}`);
    console.log(`value:: ${JSON.stringify(value)}`);
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
      <View style={styles.FormContainer}>
        <NewEntryInput
          value={amount}
          onChangeValue={setAmount}
          onChangeDebit={setDebit}
        />
        <NewEntryCategoryPicker 
          debit={debit}
          category={category}
          onChangeCategory={setCategory}          
        />
        <View style={styles.FormActionContainer}>
          <NewEntryDatePicker 
            value={entryAt}
            onChange={setEntryAt}
          />
        </View>
        <TouchableOpacity  onPress={()=>navigation.navigate('Rel')}
        >
          <Text>GPS</Text>
        </TouchableOpacity>

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
  FormContainer: {
    flex: 1,
    paddingVertical: 20
  },
  FormActionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10
  }
})