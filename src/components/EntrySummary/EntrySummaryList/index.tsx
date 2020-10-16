import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

export default function EntrySummaryList({entriesGrouped}) {
  return (
    <View>
      <Text style={styles.itemText}>Categorias</Text>
      <FlatList
        data={entriesGrouped}
        renderItem={({item}) => 
          <Text>
            {item.description} - R$ {item.amount}
          </Text>}>
      </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
})