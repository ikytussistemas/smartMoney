import React from 'react'
import { View, Button, StyleSheet} from 'react-native'
import { Picker } from '@react-native-community/picker';

import { useNavigation } from '@react-navigation/native';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary'; 
import EntryList from '../../components/EntryList';

export default function Report() {
  const navigate = useNavigation();
 
  return (
    <View style={styles.container}>
      <BalanceLabel />
      <View style={styles.filters}>
        <Picker>
          <Picker.Item label="Todas Categorias" value="All Cat"></Picker.Item>
        </Picker>
        <Picker>
          <Picker.Item label="Últimos 7 dias" value="7 Days"></Picker.Item>
        </Picker>
      </View>
      <EntrySummary />
      <EntryList />
      <View>
        <Button title='Adicionar' onPress={()=>{}}/>
        <Button title='Cancelar' onPress={()=>navigate.navigate('Main')}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  //  flex: 1,
  },
  filters: {
    
  }
})