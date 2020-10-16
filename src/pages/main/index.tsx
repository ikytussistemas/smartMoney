import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Main = () => {
  const currentBalance = 'R$ 2.764,25'

  const entries =  [
    {key: '1', description: 'Padaria Asa Branca', amount: 10},
    {key: '2', description:'Supermercado Isadora', amount: 190},
    {key: '3', description:'Posto Ipiranga', amount: 290},
  ]

  const entriesGrouped = [
    {key: '1', description: 'Alimentação', amount: 200},
    {key: '2', description: 'Combustível', amount: 350},
    {key: '3', description: 'Aluguel', amount: 120},
    {key: '4', description: 'Lazer', amount: 250},
    {key: '5', description: 'Outros', amount: 200},
  ]

  return (
    <View style={styles.container}>
      <BalancePanel  currentBalance = {currentBalance}/>
      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList entries={entries}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:10,
  }
})

export default Main;