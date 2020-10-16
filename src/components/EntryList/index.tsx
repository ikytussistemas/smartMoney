import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

import EntryListItem from './EntryListItem';

export default function EntryList({entries}) {
  return (
    <View style={styles.container}>
     <Text style={styles.itemText}>Últimos Lançamentos</Text>
      <FlatList
        data={entries}
  renderItem={({item}) => <Text>{item.description} - R$ {item.amount}</Text>}>
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
