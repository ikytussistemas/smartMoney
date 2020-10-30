import React, {useEffect, useState} from 'react'
import { View, Text, FlatList, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import EntryListItem from './EntryListItem';
import { getEntries } from '../../services/Entries';

export default function EntryList() {

  const navigation = useNavigation();
  
  const [entries, setEntries] = useState([])

  useEffect(()=>{
    const loadEntries= async() => {
      const data = await getEntries();
      setEntries(data);
    }

    loadEntries();
  }, [entries])
  
  return (
    <View style={styles.container}>
     <Text style={styles.itemText}>Últimos Lançamentos</Text>
      <FlatList
        data={entries}
        renderItem={({item}) => 
        <View>
          <Text style={styles.itemText}>
            {item.description} - R$ {item.amount}
          </Text>
          <Button 
            title={item.id} 
            onPress={()=>
              navigation.navigate('NewEntry', {entry: item})
            }/>
        </View>  
        }>
      </FlatList>
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
  },
  itemText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
})
